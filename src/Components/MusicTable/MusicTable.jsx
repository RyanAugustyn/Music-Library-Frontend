
const MusicTable = (props) => {

    return ( 
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Likes</th>
            </tr>
            </thead>
            <tbody>
            {props.songlist.map((song, index) => {
                return (
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td>{song.likes}</td>
                </tr>
                );
            })}
            <tr>Total Run Time: {props.totalTime} minutes</tr>
            </tbody>
      </table>
     );
}
 
export default MusicTable;