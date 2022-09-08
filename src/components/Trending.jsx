import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Trending(props) {
    const listTrack = props.listTrack
    const listAlbum = props.listAlbum
    const listAlbumTrack0 = props.listAlbumTrack0
    const maxPositionSlider = -1030
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    
    useEffect(() => {
        let name = { nameButton: 'trending'}
        props.colorButtons(name.nameButton)
      }, []);
    return (
        <div className='trendingDownSlider'>
            <SliderDown page={props.nameButton} numberAlbum={1} maxPositionSlider={maxPositionSlider} VisibilityOfExtraTracks={setVisibilityOfExtraTracks} listTrackIndex={props.listTrack[1]} listTrack={listTrack} listAlbum={listAlbum} listAlbumTrack0={listAlbumTrack0}/>
        </div>
    );
  }
  