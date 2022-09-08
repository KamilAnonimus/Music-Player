import React, { Component } from "react";
import './style/homepage.scss';
import ControllTrack from "./ControlTrack";

var positionXSliderUpTrack = 0;
var mouseup = 0;
var mousedown = 0;
let touchup = 0;
let numberPlayTrack = 0;
let numberAlbum = 0;
let ControlTrack = false;
class sliderDown extends Component {

    constructor() {
        super();
        this.state = {
            style: '',
        };
      }

    SwipePositionTrack(e) {
        if(positionXSliderUpTrack > this.props.maxPositionSlider && positionXSliderUpTrack < 1) {
            mouseup = window.event.clientX;
            positionXSliderUpTrack += mouseup - mousedown;
            this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
        }
    }

    OnTouchStartPosition(e) {
        touchup = window.event.changedTouches[0].clientX
    }

    OnTouchEndPosition(e) {
        let touchdown = window.event.changedTouches[0].clientX
        positionXSliderUpTrack += touchdown - touchup
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }
    render () {
    const listAlbumTrack = []
    listAlbumTrack[0] = this.props.listAlbumTrack0
    let listTrack0 = this.props.listTrackIndex
    delete listTrack0[0]
    const style = { transform: this.state.style };

    if (positionXSliderUpTrack > 0) {
        positionXSliderUpTrack = Number(-1)
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` })
    }
    if (positionXSliderUpTrack < this.props.maxPositionSlider) {
        positionXSliderUpTrack = Number(this.props.maxPositionSlider + 1)
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }

    const OnControllTrack = () => {
        if(ControlTrack === false) {ControlTrack = true} 
        else {ControlTrack = false}
    }
        return (
            <div className="wrapper">
                <div className="viewport" onClick={ e => this.SwipePositionTrack()} onMouseDown={ e => mousedown = window.event.clientX} onTouchStart={e => this.OnTouchStartPosition()} onTouchEnd={e => this.OnTouchEndPosition()}>
                    <ul style={ style }>
                    {listTrack0.map(listTrack0 => 
                        <li key={listTrack0[0]}><a className="buttomSliderDown" id={`${listTrack0[0]}0`} onClick={() => {
                                numberPlayTrack = listTrack0[0] - 1
                                OnControllTrack();
                        }}>
                                <img src={`${listTrack0[2]}`}/>
                                <div className="nameTrack">{listTrack0[3]}</div>
                                <div className="nameArtists">{listTrack0[4]}</div>
                            </a>
                        </li>
                    )}
                    </ul>
                    <ControllTrack OnControllTrack={ControlTrack} isPlayingControlTrack={numberPlayTrack} page={this.props.page} listAlbumTrack={listAlbumTrack[numberAlbum][numberPlayTrack]} listTrack={this.props.VisibilityOfExtraTracks ? this.props.listTrack[this.props.numberAlbum] : listTrack0} numberAlbum={numberAlbum}/>
                </div>
            </div>
        );
    }
}

export default sliderDown;