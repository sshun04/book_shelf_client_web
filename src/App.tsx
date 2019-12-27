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
import BookListContainer from "./view/container/BookListContainer";
import {linkAuth, linkUserBooks, linkUserHome} from "./utils/Links";
// import createBrowserHistory from 'history/createBrowserHistory';

// const store = createStore();
// const history = createBrowserHistory();

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router>
                    <Route exact={true} path="/" component={ServiceTopContainer}/>
                    <Route path={linkAuth} component={AuthContainer}/>
                    <Route path={linkUserHome} component={UserHomeContainer}/>
                    <Route path={linkUserBooks} component={BookListContainer}/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
