import * as React from "react";
import {AppContext} from "../../store/context";
import MarkdownPreview from '@uiw/react-markdown-preview';

type Props = {
    className?: string
}

const Preview: React.FC<Props> = ({className = ""}) => {
    const {state} = React.useContext(AppContext)
    return <MarkdownPreview className={className || "preview"} source={state.doc.join("\n")} />
}
export default Preview