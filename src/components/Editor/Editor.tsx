import * as React from "react";
import useCodeMirror from "../../hooks/useCodeMirror";

type IEditorProps = {
    className?: string
    hidden?: boolean
}
const Editor: React.FC<IEditorProps> = ({className, hidden = false}) => {
    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>()
    React.useEffect(() => {
        if (editorView) {
            console.log(editorView)
        }
    }, [editorView])
    return <div hidden={hidden} className={className || "editor"} ref={refContainer}></div>
}

export default Editor

