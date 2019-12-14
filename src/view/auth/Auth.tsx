import * as React from "react";
import SubscriptionFormComponent from "./components/SubscriptionFormComponent";

class Auth extends React.Component<any, any>{
    render(){
        return(
            <div>
                <SubscriptionFormComponent value={"value"}/>
            </div>
        )
    }

}

export default Auth;