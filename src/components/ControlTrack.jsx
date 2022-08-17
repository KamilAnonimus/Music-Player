import LeftArrowImg from "./images/player-fast-back.png";
import RightArrowImg from "./images/player-fast-forward.png";
import IconStopImg from './images/iconStop.png';
import RandomTrackImg from './images/shuffle.png';
import StarImg from './images/star.png';
import { useRef, useState } from 'react';
import "./style/controllTrack.scss";
import IconPlayImg from './images/player-play2.png';

export default function ControllTrack(props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [musicPlay, setmusicPlay] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const isPlayingControlTrack = props.isPlayingControlTrack
  const massAlbumTrack = props.massAlbumTrack
  const massTrack = props.massTrack
  let display = 'none'
  let numberPlayTrack = localStorage.getItem('idTrack')
  var label = document.getElementById(numberPlayTrack);

  const audioRef = useRef()
  const onChange = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
      setmusicPlay(true)

      if (!musicPlay) {
       setIsPlaying(true)
       label.style.display = 'flex';
      }
      setAutoPlay(true)
  }
  
  const play = () => {
  const audio = audioRef.current
    if(!isPlaying) {
      audio.play()
      setIsPlaying(true)
      label.style.display = 'flex';
    }

    if(isPlaying) {      
      audio.pause()
      setIsPlaying(false)
      label.style.display = 'none';
    }
  } 

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) *100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  function secondsToHms(seconds) {
    if(!seconds) return '00m 00s'

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)
    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    } else if (min == 0 & sec < 10) {
      return `0m ${sec}s`
    } else {
      return `${min}m ${sec}s`
    }
  }

  if (isPlayingControlTrack) { 
    display = 'flex'
    localStorage.setItem('controllMusicTrack', 'on');
    localStorage.setItem('idTrack', `${massAlbumTrack.id}`);
  }


  function nextTrack() {
    setAutoPlay(true)
    if (numberPlayTrack < massTrack.length - 1) {
      localStorage.setItem('idTrack',`${massAlbumTrack.id+=1}`)
      label = document.getElementById(`${localStorage.getItem("idTrack")}`);
      label.style.display = 'flex';
      label = document.getElementById(`${localStorage.getItem("idTrack")}`- 1);
      label.style.display = 'none';
    }
  }

  function prevTrack() {
    setAutoPlay(true)
    if (numberPlayTrack > 1) {
      setIsPlaying(true)
      localStorage.setItem('idTrack',`${massAlbumTrack.id-=1}`)
      label = document.getElementById(`${localStorage.getItem("idTrack")}`);
      label.style.display = 'flex';
      label = document.getElementById(`${numberPlayTrack}`);
      label.style.display = 'none';
    }
  }
  return (
    <div className='controlMusicPanel' style={{ display: `${display}`}}>
      <div className='informationMusic'>
        <img className='avatar' src={massTrack[Number(numberPlayTrack)][2]}></img>
        <div className='textInformation'>
          <div className='musicName'>{massTrack[Number(numberPlayTrack)][3]}</div>
          <div className='avtorNameMusic'>{massTrack[Number(numberPlayTrack)][4]}</div>
        </div>
      </div>
      <div className='control'>
        <img src={LeftArrowImg} onClick={prevTrack}></img>
        <img src={`${!isPlaying ? IconPlayImg : IconStopImg}`} onClick={play} style={{width:"20px"}}></img>
        <img src={RightArrowImg} onClick={nextTrack}></img>
        <div className='slider'>
          <div>
            <input type='range' step='0.01' className='sliderTrack' onChange={onChange} max={100} value={0}></input>
            <div className='mask' style={{ width:`${percentage}%`}}></div>
          </div>
          <div className='time'>{secondsToHms(currentTime)}</div>
        </div>
        <img src={RandomTrackImg}></img>  
        <img src={StarImg}></img>
        <audio
          ref={audioRef} 
          src={massTrack[Number(numberPlayTrack)][1]} 
          onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))}}
          onTimeUpdate={getCurrDuration}
          onEnded={nextTrack}
          autoPlay={autoPlay ? true : false}
        ></audio>
      </div>
    </div>
  );
}