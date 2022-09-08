import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Featured(props) {
    const listTrack = props.listTrack
    const listAlbum = props.listAlbum
    const listAlbumTrack0 = props.listAlbumTrack0
    const maxPositionSlider = -1025
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    useEffect(() => {
        let name = { nameButton: 'featured'}
        props.colorButtons(name.nameButton)
      }, []);
    return (
        <div className="feturedDownSlider">
            <SliderDown page={props.nameButton} numberAlbum={0} maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} listTrackIndex={props.listTrack[0]} listTrack={listTrack} listAlbum={listAlbum} listAlbumTrack0={listAlbumTrack0}/>
        </div>
    );
}