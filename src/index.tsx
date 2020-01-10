import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './statics/css/index.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
