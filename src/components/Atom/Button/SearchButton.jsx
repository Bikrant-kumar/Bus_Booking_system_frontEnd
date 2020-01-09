import React from 'react';
import './SearchButton.css';

const SearchButton=(props)=> {

    return (
        <div>
             <button className="rainbow"  onClick={props.searchbutton} type="button" disabled={props.disable}> <b>Search</b>
             </button>
        </div>
    )
}

export default SearchButton;
