import * as React from "react";
import {Link} from "react-router-dom";
import Search from "../Search";
import {Add} from "@material-ui/icons";
import "../../../statics/css/user_home/BookListContainer.css"

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
        }
    }

    render() {
        return (
            <nav className="App-header navbar">
                <Link to="/">アイコン入る</Link>
                <Search/>
                <div className="row mr-3">
                    <Add className="mr-2" style={{color: "white"}}/>
                </div>
            </nav>
        )
    }
}

export default HeaderBookList;