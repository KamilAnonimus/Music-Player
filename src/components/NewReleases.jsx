import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function NewReleases(props) {
    const listTrack = props.listTrack
    const listAlbum = props.listAlbum
    const listAlbumTrack0 = props.listAlbumTrack0
    const maxPositionSlider = -435
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    useEffect(() => {
        let name = { nameButton: 'newreleases'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="newReleasesDownSlider">
            <SliderDown page={props.nameButton} numberAlbum={3} maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} listTrackIndex={props.listTrack[2]} listTrack={listTrack} listAlbum={listAlbum} listAlbumTrack0={listAlbumTrack0}/>
        </div>
    );
}