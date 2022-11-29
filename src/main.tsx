import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBookOpenReader, faPen} from "@fortawesome/free-solid-svg-icons";
import './index.css'
import {AppProvider} from "./store/context";
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

library.add(faBookOpenReader, faPen)

root.render(
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>
)


