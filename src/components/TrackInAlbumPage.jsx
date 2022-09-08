import { useState } from 'react';
import ControllTrack from "./ControlTrack";

export default function TrackInAlbumPage(props) {
    const [OnControllTracks, setOnControllTracks] = useState(false)
    const listAlbumTrack = props.listAlbumTrack
    const [isPlayingControlTrack, setIsPlayingControlTrack] = useState(false)

    const OnControllTrack = () => {
        if(!props.State) {
            setOnControllTracks(true)
            setIsPlayingControlTrack(true)
            props.OnControllTrackState(true)
        }
    }
    return (
        <div className="tracksAlbum" onClick={OnControllTrack}>
            <div className="number">{listAlbumTrack.id}</div>
            <div className="imgAndNameTrack">
                <img className="trackImg" src={listAlbumTrack.imgTrack}></img>
                <div className="trackName">{listAlbumTrack.name}</div>   
            </div>
            <div className="duration">{listAlbumTrack.durationTrack}
                <div className='label' id={listAlbumTrack.id}>
                    <div className="component label1"></div>
                    <div className="component label2"></div>
                    <div className="component label3"></div>
                    <div className="component label4"></div>
                    <div className="component label5"></div>
                </div>
            </div>
            <div className="artistNameTrack">{listAlbumTrack.artist}</div>
            <div className="nameAlbumTrack">{listAlbumTrack.album}</div>
            <ControllTrack isPlayingControlTrack={isPlayingControlTrack} OnControllTrack={OnControllTracks} listAlbumTrack={listAlbumTrack} listTrack={props.listTrack}/>
        </div>
    )
}