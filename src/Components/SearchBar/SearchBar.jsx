import React, { useState } from 'react';



const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        setSearchInput(event.target.value);

    }

    let filtered = props.songlist.filter((song) => {
        return song.genre == searchInput;
    })

    


    return ( 
        <div>


        <input type="search" placeholder="Search Here" onChange={handleSubmit} value={searchInput}/>
        <p>Search Results: {filtered.map((song) => song.title)} </p>

        </div>
     );
}
 
export default SearchBar;