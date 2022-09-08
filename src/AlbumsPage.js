import ControllTrack from "./components/ControlTrack";
import "./components/style/albumsPage.scss";
import PlayImg from "./components/images/player-play.png";
import TrackInAlbumPage from "./components/TrackInAlbumPage";
import buttonLeftSliderUp from './components/images/chevron-left.png';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function AlbumsPage(props) {
    const [OnControllTracks, setOnControllTracks] = useState(false)
    const listAlbum = props.listAlbum
    const listAlbumTrack = props.listAlbumTrack
    
    const [isPlayingControlTrack, setIsPlayingControlTrack] = useState(false)


    const OnControllTrack = () => {    
        if(!isPlayingControlTrack) {      
            setOnControllTracks(true)
            setIsPlayingControlTrack(true)
        }
    }

    const [State, setState] = useState(false)
    function OnControllTrackState(name) {
      setState({name})
    }
     return (
        <div className="containerAlbumPage">
            <div className="header">
                <Link to="/"><img className='back' src={buttonLeftSliderUp}></img></Link>
                <div className="imgAndName">
                    <img className="img" src={listAlbum.imgAlbum}></img>
                    <div className="nameOnImg">{listAlbum.nameAlbum}</div>
                </div>
                <div className="informationAlbum">
                    <h1 className="headerName">{listAlbum.nameArtist}</h1>
                    <div className="mountArtists">{listAlbum.numberOfArtists} Artists</div>
                    <div className="mountSongs">{listAlbum.numberOfTracks} Songs</div>
                    <div className="lenghtTime">{listAlbum.durationAlbum}</div>
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
                    {listAlbumTrack.map(listAlbumTrack =>
                    <TrackInAlbumPage State={State} OnControllTrackState={OnControllTrackState} isPlayingControlTrack={isPlayingControlTrack} listAlbumTrack={listAlbumTrack} listAlbum={listAlbum} key={listAlbumTrack.id} OnControllTrack={OnControllTrack} listTrack={props.listTrack}/>)}
                </div>
                <div className="homepageDown">
                    <ControllTrack OnControllTrack={OnControllTracks} isPlayingControlTrack={isPlayingControlTrack} listAlbumTrack={listAlbumTrack[0]} listTrack={props.listTrack}/>
                </div>
            </div>
        </div>
    );
}