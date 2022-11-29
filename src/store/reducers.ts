import {UPDATE_DOC, UPDATE_MODE} from "./types";

export const appReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_DOC:
            localStorage.setItem('doc', action.payload.join("\n"))
            return {
                ...state,
                doc: action.payload
            }
        case UPDATE_MODE:
            localStorage.setItem('mode', action.payload)
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}