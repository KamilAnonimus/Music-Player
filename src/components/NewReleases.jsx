import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function NewReleases(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const maxPositionSlider = -435
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'newreleases'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="newReleasesDownSlider">
            <SliderDown maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[2]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0}/>
        </div>
    );
}