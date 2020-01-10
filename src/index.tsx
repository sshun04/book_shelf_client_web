import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './statics/css/index.css';
import {store} from "./store/Store";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
