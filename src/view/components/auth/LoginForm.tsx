import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/auth/AuthForm.css';
import {RouteComponentProps} from 'react-router'
import {Link} from "react-router-dom";
import {Action} from "typescript-fsa/dist/typescript-fsa";
import {State} from "../../../reducers";
import {Dispatch} from "redux";
import {loginActions} from "../../../actions/LoingAction";
import {connect} from "react-redux";

interface StateProps {
    emailAddress: string,
    password: string
}

interface DispatchProps {
    updateEmail: (value: string) => Action<string>,
    updatePassword: (value: string) => Action<string>,
}

const LoginForm = (props: RouteComponentProps<any> & StateProps & DispatchProps) =>
    (
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
                                    <input type={"text"} placeholder="メールアドレス" value={props.emailAddress}
                                           onChange={(event) => props.updateEmail(event.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <th>パスワード</th>
                                <td>
                                    <input type={"text"} placeholder="パスワード" value={props.password}
                                           onChange={(event) => props.updatePassword(event.target.value)}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <br/>
                        <button className="btn  btnAuthSubmit pt-3 pb-3" type={"submit"}>ログイン
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

const mapStateToProps = (state: State) => ({
    emailAddress: state.login.emailAddress,
    password: state.login.password
});

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => (
    {
        updateEmail: (value: string) => dispatch(loginActions.updateEmail(value)),
        updatePassword: (value: string) => dispatch(loginActions.updatePassword(value))
    }
);

export default connect<StateProps, DispatchProps, RouteComponentProps<any>>(mapStateToProps, mapDispatchToProps)(LoginForm)