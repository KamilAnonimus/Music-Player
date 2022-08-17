import PlusImg from "./images/plus.png";
import { useState } from 'react';
import ControllTrack from "./ControlTrack";

export default function TrackInAlbumPage(props) {
    const massAlbumTrack = props.massAlbumTrack
    const massAlbum = props.massAlbum
    const [isPlayingControlTrack, setIsPlayingControlTrack] = useState(false)


    const OnControllTrack = () => {
        if(!isPlayingControlTrack && localStorage.length < 1) {
            localStorage.setItem('controllMusicTrack', 'on');
            localStorage.setItem('idTrack',`${massAlbumTrack.id}`)
            setIsPlayingControlTrack(true)
        }
    }

    return (
        <div className="tracksAlbum" onClick={OnControllTrack}>
            <div className="number">{massAlbumTrack.id}</div>
            <div className="imgAndNameTrack">
                <img className="trackImg" src={massAlbumTrack.imgTrack}></img>
                <div className="trackName">{massAlbumTrack.name}</div>   
            </div>
            <div className="duration">{massAlbumTrack.durationTrack}
                <div className='label' id={massAlbumTrack.id}>
                    <div className="component label1"></div>
                    <div className="component label2"></div>
                    <div className="component label3"></div>
                    <div className="component label4"></div>
                    <div className="component label5"></div>
                </div>
            </div>
            <div className="artistNameTrack">{massAlbumTrack.artist}</div>
            <div className="nameAlbumTrack">{massAlbumTrack.album}</div>
            <img className="buttonAddPlaylistTrack" src={PlusImg}></img>
            <ControllTrack isPlayingControlTrack={isPlayingControlTrack} massAlbumTrack={massAlbumTrack} massAlbum={massAlbum.id} massTrack={props.massTrack}/>
        </div>
    )
}