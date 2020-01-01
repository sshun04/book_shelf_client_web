import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";

export function Search() {
    return (
        <div className="searchArea col-6">
            <div className="input-group md-form form-sm form-2 pl-0 mt-0 mb-0">
                <input className="form-control my-0 py-1 amber-border" type="text" placeholder="検索"
                       aria-label="Search"/>
                <div className="input-group-append pt-1">
                    <SearchIcon style={{color: "white"}}/>
                </div>
            </div>
        </div>
    )
}

class SearchComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="searchArea col-6">
                <div className="input-group md-form form-sm form-2 pl-0 mt-0 mb-0">
                    <input className="form-control my-0 py-1 amber-border" type="text" placeholder="検索"
                           aria-label="Search"/>
                    <div className="input-group-append pt-1">
                        <SearchIcon style={{color: "white"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
