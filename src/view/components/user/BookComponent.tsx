import * as React from "react";
import '../../../statics/css/user_home/Book.css'

interface Props {
    author: string
    title: string
    imgUrl: string
}

export function GridBook(props: Props) {
    return (
        <div className="gridBook">
            <a href="#">
                <img className="gridImage img-fluid img-thumbnail"
                     src={props.imgUrl}/>
            </a>
            <div className="mt-2 mb-2">
                <p className="bookTitle text-nowrap text-truncate m-0">{props.title}</p>
                <p className="bookAuthor text-nowrap text-truncate m-0">{props.author}</p>
            </div>
        </div>
    )
}

export function ColBook(props: Props) {
    return (
        <div className="flex flex-grid colBook">
            <a href="#">
                <img className="img-fluid img-thumbnail colImage"
                     src={props.imgUrl}/>
            </a>
            <div className="infoWrapper">
                <p className="bookTitle text-nowrap text-truncate">{props.title}</p>
                <p className="bookAuthor text-nowrap text-truncate">{props.author}</p>
                <p className="startRead"><a>読み始める</a></p>
            </div>
        </div>
    )
}