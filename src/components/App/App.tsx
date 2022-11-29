import * as React from 'react'
import "./App.css"
import Toolbar from "../Toolbar/Toolbar";
import {AppContext} from "../../store/context";
import {PREVIEW} from "../../store/types";
import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";

function App() {
    const {state} = React.useContext(AppContext)
    return (
        <div className="App">
            <Toolbar/>
            <div className="wrapper">
                <Editor hidden={state.mode === PREVIEW}/>
                {state.mode === PREVIEW && <Preview/>}
            </div>
        </div>
    )
}

export default App
