import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function MostPlayed(props) {
    const listTrack = props.listTrack
    const listAlbum = props.listAlbum
    const listAlbumTrack0 = props.listAlbumTrack0
    const maxPositionSlider = -725
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    
    useEffect(() => {
        let name = { nameButton: 'mostPlayed'}
        props.colorButtons(name.nameButton)
      }, []);
    return(
        <div className="mostPlayedDownSlider">
            <SliderDown page={props.nameButton} numberAlbum={5} maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={VisibilityOfExtraTracks} listTrackIndex={props.listTrack[4]} listTrack={listTrack} listAlbum={listAlbum} listAlbumTrack0={listAlbumTrack0}/>
        </div>
    );
}