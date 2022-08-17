import SliderDown from "./SmallBottomSlider";

export default function All(props) {
  const massTrack = props.massTrack
  console.log(massTrack)
    return (
      <div className='allDownSlider'>
        <SliderDown massTrack={massTrack}>
        </SliderDown>
      </div>
    );
  }
  