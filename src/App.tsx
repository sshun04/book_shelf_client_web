import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";
import './statics/css/App.css';
// import { createStore } from 'redux'
import Header from "./view/Header";
import Footer from "./view/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHome from "./view/home/UserHome";
import LoginFormComponent from "./view/auth/components/LoginForm";
import SubscriptionFormComponent from "./view/auth/components/SubscriptionForm";
// import createBrowserHistory from 'history/createBrowserHistory';

// const store = createStore()
// const history = createBrowserHistory()

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <br/>
                    <body>
                    <Route exact={true} path="/signup" component={SubscriptionFormComponent}/>
                    <Route exact={true} path="/login" component={LoginFormComponent}/>
                    <Route path="/home" component={UserHome}/>
                    </body>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
