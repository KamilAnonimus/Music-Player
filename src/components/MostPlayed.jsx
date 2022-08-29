import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function MostPlayed(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    
    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'mostPlayed'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="mostPlayedDownSlider">
            <SliderDown VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[4]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0}/>
        </div>
    );
}