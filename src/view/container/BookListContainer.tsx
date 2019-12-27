import * as React from "react";
import "../../statics/css/user_home/BookListContainer.css"
import HeaderBookList from "../components/header/HeaderBookList";
import {withRouter, RouteComponentProps} from 'react-router'
import BookGridList from "../components/user/BookGridList";

interface Props extends RouteComponentProps{
    userName: string | null
}

interface BookListState {
    isGrid: boolean
}

class BookListContainer extends React.Component<Props, BookListState> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            isGrid: true
        };
        this.handleListClick = this.handleListClick.bind(this);
    }
    handleListClick(){
        return
    }

    switchListStyle(bool: boolean) {
        this.setState({
            isGrid: bool
        })
    }

    render() {
        return (
            <div>
                <HeaderBookList defFilter="最近読んだ" filterOptions={["最近読んだ", "お気に入り"]}
                                onListStyleChange={this.switchListStyle}/>
                <body>
                <div className="wrapper">
                    <BookGridList onClick={this.handleListClick} bookList={[]}/>
                </div>
                </body>
            </div>
        )
    }
}

export default withRouter(BookListContainer);