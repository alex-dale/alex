import React from 'react';

const SearchBox = ({searchField, searchChange}) =>{
    return(
            <div className= 'pa2'>
                <input
                className= 'pa3 ba b--black bg-light-gray'
                 type = 'search'
                 placeholder = 'Search Here' 
                 onChange={searchChange} />

             </div>
         

    );
}

export default SearchBox;