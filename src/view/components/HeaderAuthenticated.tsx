import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../statics/css/Header.css'
import {Link} from 'react-router-dom'
import Search from "./Search";
import {Add} from "@material-ui/icons";

class HeaderAuthenticated extends React.Component<any, any> {
    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/">アイコン入る</Link>
                <Search/>
                <div className="pr-2">
                    <Add style={{color: "white"}}/>
                    <img src="src/statics/img/bookshelf.svg"/>
                </div>
            </nav>
        )
    }
}

export default HeaderAuthenticated;