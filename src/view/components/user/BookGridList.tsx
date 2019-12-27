import * as React from "react";
import Book from "./Book";
import "../../../statics/css/user_home/BookGrid.css"
import "../../../utils/Models"
import {BookData} from "../../../utils/Models";

interface BookGridListProps {
    bookList: BookData[]
    onClick: () => void
}

export default function BookGridList(props: BookGridListProps) {
    return (
        <div className="bookGridList justify-content-center">
            <ul className="flex flex-grid  align-content-start">
                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>

                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>

                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>

                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>

                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>

                <li>
                    <Book
                        imgUrl="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"
                        title="寄宿学校のジュリエット" author="金田陽介"/>
                </li>
            </ul>
        </div>
    )
}


