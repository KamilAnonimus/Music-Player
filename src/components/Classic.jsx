import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Classic(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)

    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'classic'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="genresDownSlider">
            <SliderDown VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[3]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0}/>
        </div>
    );
}