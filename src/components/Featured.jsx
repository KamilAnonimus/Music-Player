import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Featured(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const maxPositionSlider = -1025
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'featured'}
        props.colorButtons(name.nameButton)
      }, []);
    return (
        <div className="feturedDownSlider">
            <SliderDown maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[0]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0}/>
        </div>
    );
}