import * as React from "react";
import {EditorState} from '@codemirror/state';
import {defaultKeymap, history, historyKeymap} from "@codemirror/commands";
import {autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap} from "@codemirror/autocomplete"
import {EditorView, highlightActiveLine, highlightActiveLineGutter, keymap, lineNumbers} from "@codemirror/view";
import {
    foldGutter,
    indentOnInput,
    bracketMatching,
    syntaxHighlighting,
    defaultHighlightStyle
} from "@codemirror/language";
import {languages} from '@codemirror/language-data'
import {markdown, markdownLanguage} from "@codemirror/lang-markdown";

import * as StoreTypes from "../store/types";
import {Theme} from "../components/Editor/theme";
import {AppContext} from "../store/context";

const useCodeMirror = <T extends Element>(): [React.MutableRefObject<T | null>, EditorView?] => {
    const {state, dispatch} = React.useContext(AppContext)
    const refContainer = React.useRef<T>(null)
    const [editorView, setEditorView] = React.useState<EditorView>()

    React.useEffect(() => {
        if (!refContainer.current) return

        const view = new EditorView({
            state: EditorState.create({
                doc: state.initDoc,
                extensions: [
                    keymap.of([...defaultKeymap, ...historyKeymap, ...completionKeymap, ...closeBracketsKeymap]),
                    lineNumbers(),
                    highlightActiveLine(),
                    history(),
                    indentOnInput(),
                    bracketMatching(),
                    markdown({
                        base: markdownLanguage,
                        codeLanguages: languages,
                        addKeymap: true
                    }),
                    Theme,
                    syntaxHighlighting(defaultHighlightStyle),
                    foldGutter(),
                    highlightActiveLineGutter(),
                    closeBrackets(),
                    autocompletion({activateOnTyping: false}),
                    EditorView.lineWrapping,
                    EditorView.updateListener.of(update => {
                        if (update.changes) {
                            dispatch({type: StoreTypes.UPDATE_DOC, payload: update.state.doc.toJSON()})
                        }
                    })
                ]
            }),
            parent: refContainer.current
        })
        setEditorView(view)
        return () => {
            view.destroy()
        };
    }, [refContainer])

    return [refContainer, editorView]
}

export default useCodeMirror
