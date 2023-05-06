import React, { useState } from "react";
import './styles.css'

function Search(props) {

    const [isSearchInFocus, setIsSearchInFocus] = useState(false);
    const [searchQuery, setSearchQuery] = useState();

    function settingSearchFocus() {
        setIsSearchInFocus(true);
    }
    function unsettingSearchFocus() {
        setTimeout(()=>setIsSearchInFocus(false), 100);
    }

    function handleSearchInputChange(event){
        setSearchQuery(event.target.value);
        props.onSearchQueryChange(event.target.value);
    }

    function handleClearButtonClick(){
        setSearchQuery('');
    }

    return (
        <div className="search-div">
            <div className="search-icon-div">
                <svg fill="#b1b1b1" width="64px" height="64px" viewBox="-3.68 -3.68 25.36 25.36" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#b1b1b1" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.68" y="-3.68" width="23.36" height="23.36" rx="0" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fill-rule="evenodd"></path> </g></svg>
            </div>
            <div className="search-bar-div">
                <input type="text" 
                value={searchQuery}
                className="search-bar" 
                onFocus={settingSearchFocus} 
                onBlur={unsettingSearchFocus} 
                onChange={handleSearchInputChange} 
                placeholder="Search.." />
            </div>
            {
            isSearchInFocus ?
            <div className="search-cancel" onClick={handleClearButtonClick}>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#b5b5b5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            :
            <div className="search-cancel"></div>
            }

        </div>
    )
}

export default Search;