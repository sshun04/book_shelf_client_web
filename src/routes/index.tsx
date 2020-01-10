import {BrowserRouter as Router, Route} from "react-router-dom";
import ServiceTopContainer from "../view/container/ServiceTopContainer";
import {linkAuth, linkUserBooks, linkUserHome} from "../utils/Links";
import AuthContainer from "../view/container/AuthContainer";
import UserHomeContainer from "../view/container/UserHomeContainer";
import BookListContainer from "../view/container/BookListContainer";
import Footer from "../view/Footer";
import * as React from "react";

const routes = (
    <div>
        <Router>
            <Route exact={true} path="/" component={ServiceTopContainer}/>
            <Route path={linkAuth} component={AuthContainer}/>
            <Route path={linkUserHome} component={UserHomeContainer}/>
            <Route path={linkUserBooks} component={BookListContainer}/>
        </Router>
        <Footer/>
    </div>
);
export default routes