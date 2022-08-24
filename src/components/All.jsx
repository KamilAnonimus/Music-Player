import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function All(props) {
  const massTrack = props.massTrack
  const massAlbum = props.massAlbum
  const massAlbumTrack0 = props.massAlbumTrack0
  const massAlbumTrack1 = props.massAlbumTrack1
  const massAlbumTrack2 = props.massAlbumTrack2
  const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(true)

  localStorage.clear()
  useEffect(() => {
    let name = { nameButton: 'all'}
    props.colorButtons(name.nameButton)
  }, []);
    return (
      <div className='allDownSlider'>
        <SliderDown massTrackIndex={props.massTrack[0]} VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0} massAlbumTrack1={massAlbumTrack1} massAlbumTrack2={massAlbumTrack2}/>
      </div>
    );
  }
  