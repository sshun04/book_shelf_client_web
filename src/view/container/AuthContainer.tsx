import * as React from "react";
import HeaderTop from "../components/header/HeaderTop";
import {Switch, Route} from 'react-router-dom';
import SubscriptionForm from "../components/auth/SubscriptionForm";
import LoginForm from "../components/auth/LoginForm";
import {linkLogin, linkSignUp} from "../../utils/Links";
import {Action} from "typescript-fsa";
import {Dispatch} from 'redux';
import {loginActions} from "../../actions/LoingAction";
import { AppState } from 'src/store/Store';
import { connect } from 'react-redux';
import {LoginState} from "../../reducers/Login";

export interface LoginActions {
    updateEmail: (value: string) => Action<string>;
    updatePassword: (value: string) => Action<string>;
}

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

type AuthProps = OwnProps & LoginState & LoginActions;

class AuthContainer extends React.Component<AuthProps, any> {
    render() {
        return (
            <div>
                <HeaderTop/>
                <body>
                <br/>
                <Switch>
                    <Route path={linkLogin}  component={LoginForm}/>
                    <Route path={linkSignUp} component={SubscriptionForm}/>
                </Switch>
                </body>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return{
        updateEmail:(value: string) => dispatch(loginActions.updateEmail(value)),
        updatePassword:(value:string) => dispatch(loginActions.updatePassword(value))
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({},appState.login);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)