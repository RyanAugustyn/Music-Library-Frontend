import React, { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState('');
    const [dropdownValue, setDropdownValue] = useState('a');

    function handleSubmit(event){
        event.preventDefault();
        setSearchInput(event.target.value.toLowerCase());
    }

    let filtered = [];

    console.log(dropdownValue);

    if (searchInput !== '' && dropdownValue === 'album'){
         filtered = props.songlist.filter((song) => {
            return song.album.toLowerCase() === searchInput;
        })
    }else if (searchInput !== '' && dropdownValue === 'artist'){
        filtered = props.songlist.filter((song) => {
           return song.artist.toLowerCase() === searchInput;
       })
   }else if (searchInput !== '' && dropdownValue === 'genre'){
        filtered = props.songlist.filter((song) => {
           return song.genre.toLowerCase() === searchInput;
       })
   }else if (searchInput !== '' && dropdownValue === 'release_date'){
        filtered = props.songlist.filter((song) => {
           return song.release_date.toLowerCase() === searchInput;
       })
   }else if (searchInput !== '' && dropdownValue === 'title'){
        filtered = props.songlist.filter((song) => {
           return song.title.toLowerCase() === searchInput;
       })
   }
    

    return ( 
        <div>

        <DropdownMenu  setDropdownValue={setDropdownValue}/>

        <input type="search" placeholder="Search Here" onChange={handleSubmit} value={searchInput}/>


        <p>Search Results: {filtered.map((song) => song.title)} </p>
        <table className="table">
            <thead>
            <tr>
                <th>Song ID</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Likes</th>
                <th>Running Time</th>
            </tr>
            </thead>
            <tbody>
            {filtered.map((song, index) => {
                return (
                <tr key={index}>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td>{song.likes}</td>
                    <td>{song.running_time}</td>
                </tr>
                );
            })}
            <tr>Total Run Time: {props.totalTime} minutes</tr>
            </tbody>
            </table>

        </div>
     );
}
 
export default SearchBar;