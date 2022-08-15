import ControllTrack from "./components/ControlTrack";
import "./components/style/albumsPage.scss";
import PlayImg from "./components/images/player-play.png";
import AddImg from "./components/images/player-list-add.png";
import TrackInAlbumPage from "./components/TrackInAlbumPage";
import { useState } from 'react';

export default function AlbumsPage(props) {
    const massAlbum = props.massAlbum
    const massAlbumTrack = props.massAlbumTrack
    const [isPlayingControlTrack, setIsPlayingControlTrack] = useState(false)
    localStorage.clear()
    const OnControllTrack = () => {
        if(!isPlayingControlTrack && localStorage.length < 1) {
            setIsPlayingControlTrack(true)
        }
    
        if(isPlayingControlTrack) {
            setIsPlayingControlTrack(false)
        }
    }
    return (
        <div className="containerAlbumPage">
            <div className="header">
                <div className="imgAndName">
                    <img className="img" src={massAlbum.imgAlbum}></img>
                    <div className="nameOnImg">{massAlbum.nameAlbum}</div>
                </div>
                <div className="informationAlbum">
                    <h1 className="headerName">{massAlbum.nameArtist}</h1>
                    <div className="mountArtists">{massAlbum.numberOfArtists} Artists</div>
                    <div className="mountSongs">{massAlbum.numberOfTracks} Songs</div>
                    <div className="lenghtTime">{massAlbum.durationAlbum}</div>
                    <div className="buttons">
                        <div className="buttonPlay" onClick={OnControllTrack}>Play<img src={PlayImg}></img></div>
                        <div className="buttonSave">Save<img src={AddImg}></img></div>
                    </div>
                </div>
            </div>
            <div className="homepage">
                <div className="homepageUp">
                    <div className="columnHeadings">
                        <div className="number">#</div>
                        <div className="name">Songs</div>
                        <div className="column time">Duration</div>
                        <div className="column artist">Artist</div>
                        <div className="column album">Album</div>
                        <div className="column add">Add to playlist</div>
                    </div>
                    {massAlbumTrack.map(massAlbumTrack =>
                    <TrackInAlbumPage massAlbumTrack={massAlbumTrack} massAlbum={massAlbum} key={massAlbumTrack.id} OnControllTrack={OnControllTrack} massTrack={props.massTrack}/>)}
                </div>
                <div className="homepageDown">
                    <ControllTrack isPlayingControlTrack={isPlayingControlTrack} massAlbumTrack={massAlbumTrack[0]} massTrack={props.massTrack}/>
                </div>
            </div>
        </div>
    );
}