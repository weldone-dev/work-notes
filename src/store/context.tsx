import * as React from "react";
import {appReducer} from "./reducers";
import {EDITOR, MODE} from "./types";

type InitialStateType = {
    initDoc: string;
    doc: string[];
    mode: MODE;
}
const initialState = {
    initDoc: localStorage.getItem("doc") || ` `,
    doc: [],
    mode: localStorage.getItem("mode") as MODE || EDITOR
}

const AppContext = React.createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
})

const AppProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}