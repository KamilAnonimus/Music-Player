import ControllTrack from "./components/ControlTrack";
import "./components/style/albumsPage.scss";
import PlayImg from "./components/images/player-play.png";
import TrackInAlbumPage from "./components/TrackInAlbumPage";
import buttonLeftSliderUp from './components/images/chevron-left.png';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function AlbumsPage(props) {
    const massAlbum = props.massAlbum
    const massAlbumTrack = props.massAlbumTrack
    const [isPlayingControlTrack, setIsPlayingControlTrack] = useState(false)
    if (localStorage.length === 0) {
        localStorage.setItem('idTrack',1)
    } else {localStorage.clear()}


    const OnControllTrack = () => {    
        if(!isPlayingControlTrack && localStorage.length < 2) {            
            setIsPlayingControlTrack(true)
        }
    }

    return (
        <div className="containerAlbumPage">
            <div className="header">
                <Link to="/"><img className='back' src={buttonLeftSliderUp}></img></Link>
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
                    </div>
                    <img className='buttonPlayMobile' onClick={OnControllTrack}src={PlayImg}></img>
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