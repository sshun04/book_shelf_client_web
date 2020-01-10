import * as React from "react";
import HeaderTop from "../components/header/HeaderTop";
import {Switch, Route} from 'react-router-dom';
import SubscriptionForm from "../components/auth/SubscriptionForm";
import {linkLogin, linkSignUp} from "../../utils/Links";
import LoginForm from "../components/auth/LoginForm";
import {RouteComponentProps, withRouter} from 'react-router'




type AuthProps = RouteComponentProps<any>

class AuthContainer extends React.Component<AuthProps, any> {
    render() {
        return (
            <div>
                <HeaderTop/>
                <body>
                <br/>
                <Switch>
                    <Route path={linkLogin} component={LoginForm}/>
                    <Route path={linkSignUp} component={SubscriptionForm}/>
                </Switch>
                </body>
            </div>
        )
    }
}


export default withRouter(AuthContainer)