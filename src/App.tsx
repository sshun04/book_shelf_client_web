import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";
import './statics/css/App.css';
import routes from "./routes";
import { History } from 'history'
import {ConnectedRouter} from "connected-react-router";

interface AppProps {
    history: History<any>;
}

const App = ({ history }: AppProps) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
};

export default App;
