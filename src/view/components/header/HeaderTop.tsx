import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/Header.css'
import {Link} from 'react-router-dom'
import SearchComponent from "../SearchComponent";

export default function HeaderTop() {
    return (
        <nav className="App-header navbar">
            <Link to="/">アイコン入る</Link>
            <SearchComponent/>
            <div className="pr-2">
                <Link className="mr-3" to="/auth/login">Login</Link>
                <Link to="/auth/signup">SignUp</Link>
            </div>
        </nav>
    )
}
