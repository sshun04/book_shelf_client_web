import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/auth/AuthForm.css';
import {withRouter, RouteComponentProps} from 'react-router'


interface OwnProps extends RouteComponentProps {
    // 親コンポーネントから渡ってきたpropsの型
    value: string
}

interface Props extends OwnProps {
    // コンポーネントに渡す型
    value: string
}

interface SubscriptionState {
    name: string,
    emailAddress: string,
    password: string
}

class SubscriptionForm extends React.Component<Props, SubscriptionState> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            name: "",
            emailAddress: "",
            password: "",
        };
        this.updateName = this.updateName.bind(this);
        this.updatePassWord = this.updatePassWord.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    NavigateToHome() {
        this.props.history.push("/home")
    }

    updateName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            name: event.currentTarget.value
        });
    }

    updatePassWord(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            password: event.currentTarget.value
        });

    }

    updateEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            emailAddress: event.currentTarget.value
        });
    }

    handleSubmit() {
        if (!this.state.emailAddress.includes('@')) {
            console.log("email form isn't correct");
            return;
        }
        if (this.state.password.length < 8) {
            console.log("password must be 8 characters or longer");
            return;
        }
        if (this.state.name.length === 0) {
            return;
        }
        this.NavigateToHome()
    }


    public render() {
        return (
            <div className="authContainer container">
                <div className="justify-content-center text-center">
                    <h1 className="h1 mb-3">新規登録</h1>
                    <h2 className="h4">ようこそBookStorageへ</h2>
                    <br/>
                    <div className="signUpArea mx-auto">
                        <form action={"/signUp"} className="form">
                            <table>
                                <tbody>
                                <tr>
                                    <th>メールアドレス</th>
                                    <td>
                                        <input type="text" value={this.state.emailAddress} onChange={this.updateEmail}
                                               placeholder="メールアドレス"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ユーザーネーム</th>
                                    <td>
                                        <input type="text" value={this.state.name} onChange={this.updateName}
                                               placeholder="ユーザーネーム"
                                        />
                                    </td>

                                </tr>
                                <tr>
                                    <th>パスワード</th>
                                    <td>
                                        <input type="text" value={this.state.password}
                                               onChange={this.updatePassWord} placeholder="パスワード"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <button className="btn  btnAuthSubmit pt-3 pb-3" type={"submit"} onClick={this.handleSubmit}>登録する</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SubscriptionForm);