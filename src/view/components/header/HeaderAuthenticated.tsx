import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../statics/css/Header.css'
import {Link} from 'react-router-dom'
import SearchComponent from "../SearchComponent";
import BookShelf from '../../../statics/img/bookShelfWhite.png';
import {Add} from "@material-ui/icons";
import {withRouter, RouteComponentProps} from 'react-router'
import {linkUserBooks} from "../../../utils/Links";

interface Prop extends RouteComponentProps {
    value: string | null
}

class HeaderAuthenticated extends React.Component<Prop, any> {
    constructor(props: Readonly<Prop>) {
        super(props);
        this.navigateToBookShelf = this.navigateToBookShelf.bind(this)
    }

    navigateToBookShelf() {
        this.props.history.push(linkUserBooks)
    }

    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/">アイコン入る</Link>
                <SearchComponent/>
                <div className="row mr-3">
                    <Add className="mr-2" style={{color: "white", height: 24, width: 24}}/>
                    <img onClick={this.navigateToBookShelf} src={BookShelf} height={24} width={24}/>
                </div>
            </nav>
        )
    }
}

export default withRouter(HeaderAuthenticated);