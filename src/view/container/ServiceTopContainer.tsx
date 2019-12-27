import * as React from "react";
import HeaderTop from "../components/header/HeaderTop";
import "@material-ui/icons";

class ServiceTopContainer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <HeaderTop/>
                <br/>
                <div className="container">
                    <body>
                    <h1>BookStorage</h1>
                    <p>あなたの読書活動をサポートするサービスです</p>
                    </body>
                </div>
            </div>
        )
    }
}

export default ServiceTopContainer;