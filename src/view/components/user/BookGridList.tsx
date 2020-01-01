import * as React from "react";
import "../../../utils/Models"
import {BookData} from "../../../utils/Models";
import {GridBook} from "./BookComponent";
import "../../../statics/css/user_home/BookGrid.css"

interface BookGridListProps {
    bookList: BookData[]
}

export default function BookGridList(props: BookGridListProps) {
    return (
        <div className="bookGridList justify-content-center">
            <ul className="flex flex-grid  align-content-start">
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>
                <li>
                    <GridBook author={"金田陽介"} title={"寄宿学校のジュリエット (1)"}
                              imgUrl={"https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"}/>
                </li>

            </ul>
        </div>
    )
}


