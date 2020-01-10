import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/auth/AuthForm.css';
import {withRouter, RouteComponentProps} from 'react-router'
import {Link} from "react-router-dom";
import {linkUserHome} from "../../../utils/Links";

interface Props extends RouteComponentProps {
    value: string | null
}

interface LoginState {
    identity: string,
    password: string,
    isUsingName: boolean
}

class LoginForm extends React.Component<Props, LoginState> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            identity: "",
            password: "",
            isUsingName: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateIdentity = this.updateIdentity.bind(this);
        this.updatePassWord = this.updatePassWord.bind(this);
        this.validateValue = this.validateValue.bind(this);
    }

    navigateToHome() {
        this.props.history.push(linkUserHome)
    }

    updateIdentity(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            identity: event.currentTarget.value
        });
    }

    updatePassWord(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            password: event.currentTarget.value
        });
    }

    validateValue(): boolean {
        if (this.state.password.length < 8) {
            console.log("password must be 8 characters or longer");
            return false;
        }
        return this.state.identity.length !== 0;

    }

    handleSubmit() {
        // if (!this.validateValue()) {
        //         //     return;
        //         // }
        this.navigateToHome();
    }

    public render() {
        return (
            <div className="authContainer container">
                <div className="justify-content-center text-center">
                    <h1 className="h1 mb-3">ログイン</h1>
                    <p className="mb-0">アカウントをお持ちの方は、下記からログインしてください。</p>
                    <p> まだ登録してない方は<Link to="/auth/signup">新規登録</Link>して下さい。</p>
                    <br/>
                    <div className="signUpArea mx-auto">
                        <form>
                            <table>
                                <tbody>
                                <tr>
                                    <th>ユーザーネーム</th>
                                    <td>
                                        <input type={"text"} placeholder="ユーザーネーム" value={this.state.identity}
                                               onChange={this.updateIdentity}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>パスワード</th>
                                    <td>
                                        <input type={"text"} placeholder="パスワード" value={this.state.password}
                                               onChange={this.updatePassWord}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <button className="btn  btnAuthSubmit pt-3 pb-3" type={"submit"}
                                    onClick={this.handleSubmit}>ログイン
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(LoginForm);