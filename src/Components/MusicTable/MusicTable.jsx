
const DisplayEntries = (props) => {

    
    return ( 
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
            {props.songlist.map((song, index) => {
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
            </tbody>
      </table>
     );
}
 
export default DisplayEntries;