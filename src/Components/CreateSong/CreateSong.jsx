import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateSong = (props) => {

    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[runningTime, setRunningTime] = useState(0);
    const[genre, setGenre] = useState('');

    function createSong(newSong){
        let url = '/http://127.0.0.1:5000/api/songs';
        axios.post(url, newSong);
        
    }
    function handleSubmit(event){
        event.preventDefault();

        let newSong = {
            title: title,
            artist: artist,
            album: album, 
            running_time: runningTime, 
            genre: genre
        };

        console.log(title);
        console.log(newSong);
        createSong(newSong);
    }

    return ( 
    <div>
        <form onSubmit={handleSubmit} className='formBox'>
            <div className='form-group'>
                <label>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Running Time</label>
                <input type='text' className='form-control' value={runningTime} onChange={(event) => setRunningTime(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>

            <div>
                <button type='submit' className='btn btn-primary submitBtn'>Post Button</button>
            </div>
        </form>
    </div> );
}
 
export default CreateSong;