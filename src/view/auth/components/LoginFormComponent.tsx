import * as React from 'react';

interface Props {
    value: string
}

interface LoginState {
    identity: string,
    password: string,
    isUsingName: boolean
}


class LoginFormComponent extends React.Component<Props, LoginState> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            identity: "",
            password: "",
            isUsingName: false
        }
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
        return false
    }

    handleSubmit() {
        if (this.validateValue()) {
            return;
        } else {
            return;
        }
    }

    public render() {
        return (
            <div className="justify-content-center">
                <h1>ログイン</h1>
                <p>アカウントをお持ちの方は、下記からログインしてください。
                    まだ登録してない方は<a href={""}>新規登録</a>して下さい。
                </p>
                <div>
                    <form>
                        <table>
                            <tbody>
                            <tr>
                                <th>ユーザーネームまたはメールアドレス</th>
                                <td>
                                    <input type={"text"} value={this.state.identity} onChange={this.updateIdentity}/>
                                </td>
                            </tr>
                            <tr>
                                <th>パスワード</th>
                                <td>
                                    <input type={"text"} value={this.state.password} onChange={this.updatePassWord}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button type={"submit"} onClick={this.handleSubmit}>ログイン</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginFormComponent;