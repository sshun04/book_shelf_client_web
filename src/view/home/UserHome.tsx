import * as React from "react";
import UserInfoComponent from "./components/UserInfoComponent";
import BookSwiperComponent from "./components/BookSwiperComponent";


class UserHome extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <br/>
                <UserInfoComponent
                    userName="Shun" numOfBook={10} done={10} notYet={10} thisMonth={3}/>
                <br/>
                <br/>
                <BookSwiperComponent/>
                <BookSwiperComponent/>
                <BookSwiperComponent/>
                <BookSwiperComponent/>
            </div>
        )
    }
}

export default UserHome;