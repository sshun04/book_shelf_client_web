import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../statics/css/Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';


class Header extends React.Component<any, any> {
    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/home">Home</Link>
                <Search/>
                <div className="pr-2">
                    <Link className="mr-3" to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                </div>
            </nav>
        )
    }
}

export default Header;

const Search = () => {
    return (
        <div className="searchArea col-6">
            <div className="input-group md-form form-sm form-2 pl-0 mt-0 mb-0">
                <input className="form-control my-0 py-1 amber-border" type="text" placeholder="検索"
                       aria-label="Search"/>
                <div className="input-group-append pt-1">
                    <SearchIcon style={{color:"white"}}/>
                </div>
            </div>
        </div>
    )
};