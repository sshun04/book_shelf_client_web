import * as React from "react";
import {Link} from "react-router-dom";
import SearchComponent from "../SearchComponent";
import {Add, ViewList, Apps} from "@material-ui/icons";
import "../../../statics/css/user_home/BookListContainer.css"
import "react-bootstrap"

interface Prop {
    defFilter: string
    filterOptions: string[]
    onListStyleChange: (isGrid: boolean) => void
}

interface State {
    filter: string
}

class HeaderBookList extends React.Component<Prop, State> {
    constructor(props: Readonly<Prop>) {
        super(props);
        this.state = {
            filter: this.props.defFilter
        };
        this.onClickGrid = this.onClickGrid.bind(this);
        this.onClickList = this.onClickList.bind(this);
    }

    onClickGrid() {
        this.props.onListStyleChange(true)
    }

    onClickList() {
        this.props.onListStyleChange(false)
    }

    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/">アイコン入る</Link>
                <SearchComponent/>
                <div className="row mr-3">
                    <ul className="flex flex-grid flex-center">
                        <li onClick={this.onClickGrid}>
                            <Apps className="mr-2" style={{color: "white"}}/><p>グリッド</p>
                        </li>
                        <li onClick={this.onClickList}>
                            <ViewList className="mr-2" style={{color: "white"}}/><p>リスト</p>
                        </li>
                    </ul>
                    <Add className="mr-2" style={{color: "white"}}/>
                </div>
            </nav>
        )
    }
}

export default HeaderBookList;