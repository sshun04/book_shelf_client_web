import * as React from "react";
import '../../../statics/css/user_home/Book.css'

interface Props {
    author: string
    title: string
    imgUrl: string
}

export default function Book(props:Props) {
    return (
        <div>
            <a href="#">
                <img className="img-fluid img-thumbnail" alt=""
                     src="https://images-fe.ssl-images-amazon.com/images/I/41omYg1m1LL._SX338_QL80_TTH_.jpg"/>
            </a>
            <div className="mt-2 mb-2">
                <p className="bookTitle text-nowrap text-truncate m-0">寄宿学校のジュリエット</p>
                <p className="bookAuthor text-nowrap text-truncate m-0">金田陽介</p>
            </div>
        </div>
    )
}