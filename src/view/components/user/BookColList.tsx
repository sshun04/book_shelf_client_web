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
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>
                <li>
                    <ColBook author="" title="" imgUrl=""/>
                </li>

            </ul>
        </div>
    )
}