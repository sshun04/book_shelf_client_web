import * as React from "react";
import UserInfoComponent from "../components/user/UserInfoComponent";
import BookSwiperComponent from "../components/user/BookSwiperComponent";
import HeaderAuthenticated from "../components/HeaderAuthenticated";


class UserHomeContainer extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <HeaderAuthenticated/>
                <br/>
                <div className="container">
                    <br/>
                    <UserInfoComponent
                        userName="Shun" numOfBook={10} done={10} notYet={10} thisMonth={3}/>
                    <br/>
                    <br/>
                    <BookSwiperComponent header="最近読んだ本" numberOfBooks={10} link="/"/>
                    <BookSwiperComponent header="未読の本" numberOfBooks={20} link="/"/>
                    <BookSwiperComponent header="お気に入り" numberOfBooks={6} link="/"/>
                    <BookSwiperComponent header="漫画" numberOfBooks={7} link="/"/>
                </div>
            </div>
        )
    }
}

export default UserHomeContainer;