import * as React from "react";
import {withRouter, RouteComponentProps} from 'react-router'


interface Props extends RouteComponentProps {
    value: string
    author: string
    title: string
    imgUrl: string
}

interface State {
    value: string
}

class Book extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <a href="#">
                    <img className="img-fluid img-thumbnail"
                         src={this.props.imgUrl}/>
                </a>
                <div>
                    <div className="bookTitle text-nowrap text-truncate">{this.props.title}</div>
                    <div className="bookAuthor text-nowrap text-truncate">{this.props.author}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Book)