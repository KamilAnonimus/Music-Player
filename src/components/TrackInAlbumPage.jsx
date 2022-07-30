import PlusImg from "./images/plus.png";

export default function TrackInAlbumPage(props) {
    const massAlbumTrack = props.massAlbumTrack
    return (
        <div className="tracksAlbum">
            <div className="number">{massAlbumTrack.id}</div>
            <div className="imgAndNameTrack">
                <img className="trackImg" src={massAlbumTrack.imgTrack}></img>
                <div className="trackName">{massAlbumTrack.name}</div>   
            </div>
            <div className="duration">{massAlbumTrack.durationTrack}</div>
            <div className="artistNameTrack">{massAlbumTrack.artist}</div>
            <div className="nameAlbumTrack">{massAlbumTrack.album}</div>
            <img className="buttonAddPlaylistTrack" src={PlusImg}></img>
        </div>
    )
}