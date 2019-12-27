import * as React from "react";
import UserInfoComponent from "../components/user/UserInfoComponent";
import BookSwiperComponent from "../components/user/BookSwiperComponent";
import HeaderAuthenticated from "../components/header/HeaderAuthenticated";
import {withRouter, RouteComponentProps} from 'react-router'
import {BookData, UserModel} from "../../utils/Models";
import {linkUserBooks} from "../../utils/Links";


interface Props extends RouteComponentProps {
    user: UserModel
}

class UserHomeContainer extends React.Component<Props, {}> {
    constructor(props: Readonly<any>) {
        super(props);
        this.handleClickMore = this.handleClickMore.bind(this);
    }

    bookList: BookData[] = [];

    handleClickMore(genre: string) {
        this.props.history.push({
            pathname: linkUserBooks,
            state: {bookList: this.bookList, filter: genre}
        })
    }


    render() {
        return (
            <div>
                <HeaderAuthenticated value={"ex"}/>
                <br/>
                <div className="container">
                    <br/>
                    <UserInfoComponent
                        userName="Shun" numOfBook={10} done={10} notYet={10} thisMonth={3}/>
                    <br/>
                    <br/>
                    <BookSwiperComponent onClickMore={this.handleClickMore} filterHeader="最近読んだ本" numberOfBooks={10} link="/"/>
                    <BookSwiperComponent onClickMore={this.handleClickMore} filterHeader="未読の本" numberOfBooks={20} link="/"/>
                    <BookSwiperComponent onClickMore={this.handleClickMore} filterHeader="お気に入り" numberOfBooks={6} link="/"/>
                    <BookSwiperComponent onClickMore={this.handleClickMore} filterHeader="漫画" numberOfBooks={7} link="/"/>
                </div>
            </div>
        )
    }
}

export default withRouter(UserHomeContainer);