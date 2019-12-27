import * as React from "react";
import '../../../statics/css/user_home/UserInfo.css';
import 'bootstrap/dist/css/bootstrap.css';

interface UserInfoProps {
    userName: string
    numOfBook: number
    done: number
    notYet: number
    thisMonth: number
}

class UserInfoComponent extends React.Component<UserInfoProps> {
    constructor(props: UserInfoProps) {
        super(props);
    }

    render() {
        return (
            <section className="top">
                <div className="container">
                    <div className="topWrapper">
                        <div className="row ">
                            <div className="userIcon">
                                <img className="rounded-circle"
                                     src="https://avatars1.githubusercontent.com/u/41961752?s=460&v=4"
                                     width="80px" height="80px"/>
                            </div>
                            <div className="text-left">
                                <div className="userName ml-3">Shunsukeさん</div>
                                <div className="userId ml-3">@ssh04</div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <table className="table recordTable">
                                <thead>
                                <th scope="col">蔵書</th>
                                <th scope="col">読了</th>
                                <th scope="col">未読</th>
                                <th scope="col" >今月</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.props.numOfBook}冊</td>
                                    <td>{this.props.done}冊</td>
                                    <td>{this.props.notYet}冊</td>
                                    <td>{this.props.thisMonth}冊</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UserInfoComponent;