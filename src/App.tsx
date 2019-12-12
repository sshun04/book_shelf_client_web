import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SubscriptionForm from "./SubscriptionForm";


class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <header className="App-header navbar"/>
                <body>
                <br/>
                <SubscriptionForm value={"仮"}/>
                </body>
            </div>
        );
    }
}

export default App;
