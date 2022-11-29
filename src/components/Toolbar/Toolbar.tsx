import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Toolbar.css"
import {AppContext} from "../../store/context";
import * as StoreTypes from "../../store/types";

const Mode: React.FC<{
    mode: typeof StoreTypes.PREVIEW | typeof StoreTypes.EDITOR,
    onClick: () => void
}> = ({mode, onClick}) => {
    const icon = mode === StoreTypes.PREVIEW
        ? <FontAwesomeIcon onClick={onClick} icon={["fas", "book-open-reader"]}/>
        : <FontAwesomeIcon onClick={onClick} icon={["fas", "pen"]}/>
    return <div className="mode">{icon}</div>
}
const Toolbar: React.FC = () => {
    const {state, dispatch} = React.useContext(AppContext)
    const onChangeMode = () => dispatch({
        type: StoreTypes.UPDATE_MODE,
        payload: state.mode == StoreTypes.EDITOR ? StoreTypes.PREVIEW : StoreTypes.EDITOR
    })
    return (
        <div className="toolbar">
            <Mode mode={state.mode} onClick={onChangeMode}/>
        </div>
    )
}
export default Toolbar