import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable.jsx";
import SearchBar from "./Components/SearchBar/SearchBar";
import CreateSong from "./Components/CreateSong/CreateSong";

function App() {
  const [songs, setSongs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/songs");
      console.log(response);
      const { songs, total_running_time } = response.data;
      console.log(songs);
      setSongs(songs);
      setTotalTime(total_running_time);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar songlist={songs} setSongs={setSongs} />
      <CreateSong />
      <MusicTable songlist={songs} totalTime={totalTime} />
    </div>
  );
}

export default App;

/* 
(5 points) As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience.   
  
Bonus
(10 points) As a music enthusiast, I want to be able to update the song data in my table using a modal popup window that initiates a PUT request to the Flask REST API 
(5 points) As a music enthusiast, I want to be able to delete a song from my table, initiating a DELETE request to my Flask REST API 
*/
