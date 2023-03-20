import React from "react";

const SearchBox = ( {searchChange} ) => {
    return (
       <div>
            <input 
            className="pa3 ba "
            type='search' placeholder='search users'
            onChange = {searchChange}
            />
       </div>
    );
}

export default SearchBox;