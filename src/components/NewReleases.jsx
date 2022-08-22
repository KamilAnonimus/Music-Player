import { useState } from "react";
import SliderDown from "./SmallBottomSlider";

export default function NewReleases(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const massAlbumTrack1 = props.massAlbumTrack1
    const massAlbumTrack2 = props.massAlbumTrack2
    localStorage.clear()
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    return(
        <div className="newReleasesDownSlider">
            <SliderDown VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[2]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack1={massAlbumTrack1} massAlbumTrack0={massAlbumTrack0} massAlbumTrack2={massAlbumTrack2}/>
        </div>
    );
}