import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
// import MusicTable from './Components/MusicTable/MusicTable.jsx'

function App() {

  const [songs, setSongs] = useState([]);

  useEffect( () => {
    getAllSongs();
  }, [] )

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data);
    console.log(songs)
  }


  return (
    <div className="App">
      {/* <MusicTable songlist = {songs}/> */}
      <button onClick={getAllSongs}>Get the songs</button>
    </div>
  );
}

export default App;


/* (10 points) As a developer, I want to display the data (song title, album, artist, genre, release date, and running_time) from the API within a table on the frontend.  
(5 points): As a developer, I want to create a minimum of three React components and use them within my React application. (EX: NavigationBar, SearchBar, MusicTable)  
(5 points) As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience.   
(10 points) As a music enthusiast, I want to be able to filter the table of music by album, artist, genre, release date, or title.  
(10 points) As a music enthusiast, I want to be able to add a song to my database by using Axios to make a POST request to the Flask REST API 
  
Bonus
(10 points) As a music enthusiast, I want to be able to update the song data in my table using a modal popup window that initiates a PUT request to the Flask REST API 
(5 points) As a music enthusiast, I want to be able to delete a song from my table, initiating a DELETE request to my Flask REST API 
(5 points) As a developer, I want to display the combined length of the running_time of all songs in the database (Note: This does not need to change depending on which songs meet the current filter)

*/