import * as React from 'react';
import './statics/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./view/Header";
import UserHome from "./view/home/UserHome";
import Footer from "./view/Footer";


class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Header/>
                <body>
                <br/>
                <UserHome/>
                </body>
                <Footer/>
            </div>
        );
    }
}

export default App;
