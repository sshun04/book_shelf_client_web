import * as React from "react";
import HeaderTop from "../components/HeaderTop";
import {Switch, Route} from 'react-router-dom';
import SubscriptionForm from "../components/auth/SubscriptionForm";
import LoginForm from "../components/auth/LoginForm";

class AuthContainer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <HeaderTop/>
                <body>
                <br/>
                <Switch>
                    <Route path="/auth/login" component={LoginForm}/>
                    <Route path="/auth/signup" component={SubscriptionForm}/>
                </Switch>
                </body>
            </div>
        )
    }
}

export default AuthContainer;