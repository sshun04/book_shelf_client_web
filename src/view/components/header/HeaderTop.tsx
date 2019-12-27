import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/Header.css'
import {Link} from 'react-router-dom'
import Search from "../Search";


class HeaderTop extends React.Component<any, any> {
    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/">アイコン入る</Link>
                <Search/>
                <div className="pr-2">
                    <Link className="mr-3" to="/auth/login">Login</Link>
                    <Link to="/auth/signup">SignUp</Link>
                </div>
            </nav>
        )
    }
}

export default HeaderTop;

