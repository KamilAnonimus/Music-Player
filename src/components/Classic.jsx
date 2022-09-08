import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Classic(props) {
    const listTrack = props.listTrack
    const listAlbum = props.listAlbum
    const listAlbumTrack0 = props.listAlbumTrack0
    const maxPositionSlider = -575
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    useEffect(() => {
        let name = { nameButton: 'classic'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="genresDownSlider">
            <SliderDown page={props.nameButton} numberAlbum={4} maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} listTrackIndex={props.listTrack[3]} listTrack={listTrack} listAlbum={listAlbum} listAlbumTrack0={listAlbumTrack0}/>
        </div>
    );
}