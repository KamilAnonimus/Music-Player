import LeftArrowImg from "./images/player-fast-back.png";
import RightArrowImg from "./images/player-fast-forward.png";
import IconStopImg from './images/iconStop.png';
import { useRef, useState } from 'react';
import "./style/controllTrack.scss";
import IconPlayImg from './images/player-play2.png';
import { useEffect } from "react";

export default function ControllTrack(props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [musicPlay, setmusicPlay] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [numberPlayTrack, setnumberPlayTrack] = useState(1)
  const isPlayingControlTrack = props.isPlayingControlTrack
  const listAlbumTrack = props.listAlbumTrack
  const listTrack = props.listTrack
  let display = 'none'
  if (props.OnControllTrack) {display = 'flex'}
  let width = '1042px'
  let marginLeft = "50px"
  let opacityAvtorNameMusic = '100'
  if (props.page !== undefined) { width = '887px'; marginLeft = "0px"; opacityAvtorNameMusic = '0' }
  var label = document.getElementById(numberPlayTrack);

  const audioRef = useRef()
  const onChange = (e) => {
    setAutoPlay(true)

    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
    setmusicPlay(true)

    if (!musicPlay) {
      setIsPlaying(true)
      label.style.display = 'flex';
    }
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

  useEffect(() => {
  if(listAlbumTrack.id > listTrack.length - 1) {
    display = 'none';
    setnumberPlayTrack(1)
  }
  if (isPlayingControlTrack) { 
        display = 'flex'
        setnumberPlayTrack(listAlbumTrack.id);
    }
  }, [isPlayingControlTrack])
 
  function nextTrack() {
    setAutoPlay(true)
    if (numberPlayTrack < listTrack.length - 1) {
      setIsPlaying(true)
      if(props.page !== undefined) {
        setnumberPlayTrack(Number(numberPlayTrack) + Number(1))
        setIsPlaying(true)
      } else {
        setnumberPlayTrack(`${listAlbumTrack.id+=1}`)
      }
      label = document.getElementById(`${listAlbumTrack.id}`);
      label.style.display = 'flex';
      label = document.getElementById(`${listAlbumTrack.id}`- 1);
      label.style.display = 'none';
    } else {
      setIsPlaying(true)
    }
  }

  function prevTrack() {
    setAutoPlay(true)
    if (numberPlayTrack > 1) {
      setIsPlaying(true)
      if(props.page !== undefined) {
        setnumberPlayTrack(Number(numberPlayTrack - 1))
      } else {
        setnumberPlayTrack(Number(`${listAlbumTrack.id-=1}`))
      }
      label = document.getElementById(`${listAlbumTrack.id}`);
      label.style.display = 'flex';
      label = document.getElementById(Number(`${listAlbumTrack.id}`)+ Number(1));
      label.style.display = 'none';
    } else {
      setIsPlaying(true)
      if (props.numberAlbum > 0) {
        setnumberPlayTrack(listTrack.length - 1)
      }
    }
  }
  return (
    <div className='controlMusicPanel' style={{ display: `${display}`, width: `${width}`, marginLeft: `${marginLeft}`}}>
      <div className='informationMusic'>
        <img className='avatar' src={listTrack[Number(listAlbumTrack.id > listTrack.length - 1 ? 1 : numberPlayTrack)][2]}></img>
        <div className='textInformation'>
          <div className='musicName'>{listTrack[Number(listAlbumTrack.id > listTrack.length - 1 ? 1 : numberPlayTrack)][3]}</div>
          <div className='avtorNameMusic'  style={{ opacity: `${opacityAvtorNameMusic}`}}>{listTrack[Number(listAlbumTrack.id > listTrack.length - 1 ? 1 : numberPlayTrack)][4]}</div>
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
        <audio
          ref={audioRef} 
          src={listTrack[Number(listAlbumTrack.id > listTrack.length - 1 ? 1 : numberPlayTrack)][1]} 
          onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))}}
          onTimeUpdate={getCurrDuration}
          onEnded={nextTrack}
          autoPlay={autoPlay ? true : false}
        ></audio>
      </div>
    </div>
  );
}