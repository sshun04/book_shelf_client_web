import {BookData} from "../../../utils/Models";
import * as React from "react";
import {ColBook} from "./BookComponent";
import "../../../statics/css/user_home/BookColList.css"

interface BookColListProps {
    bookList: BookData[]
}

export default function BookColList(props: BookColListProps) {
    return (
        <div className="bookColList justify-content-center">
            <ul className="flex flex-grid  align-content-start">
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>
                <li>
                    <ColBook author="金田陽介" title="寄宿学校のジュリエット (1)"
                             imgUrl="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                </li>

            </ul>
        </div>
    )
}