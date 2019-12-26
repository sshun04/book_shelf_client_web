import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";
import './statics/css/App.css';
// import { createStore } from 'redux'
import Footer from "./view/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHomeContainer from "./view/container/UserHomeContainer";
import ServiceTopContainer from "./view/container/ServiceTopContainer";
import AuthContainer from "./view/container/AuthContainer";
// import createBrowserHistory from 'history/createBrowserHistory';

// const store = createStore();
// const history = createBrowserHistory();

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Router>
                    <Route exact={true} path="/" component={ServiceTopContainer}/>
                    <Route exact={true} path="/home" component={UserHomeContainer}/>
                    <Route  path="/auth" component={AuthContainer}/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
