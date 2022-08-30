import React, { Component } from "react";
import './style/homepage.scss';
import ControllTrack from "./ControlTrack";

var positionXSliderUpTrack = 0;
var mouseup = 0;
var mousedown = 0;
let touchup = 0;
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
    const massAlbumTrack = []
    massAlbumTrack[0] = this.props.massAlbumTrack0
    massAlbumTrack[1] = this.props.massAlbumTrack1
    massAlbumTrack[2] = this.props.massAlbumTrack2
    massAlbumTrack[3] = this.props.massAlbumTrack3
    let massTrack0 = this.props.massTrackIndex
    delete massTrack0[0]
    let massTrack1 = this.props.massTrack[1]
    delete massTrack1[0]
    let massTrack2 = this.props.massTrack[2]
    delete massTrack2[0]
    let massTrack3 = this.props.massTrack[3]
    delete massTrack3[0]
    const style = { transform: this.state.style };
    let numberAlbum = Number(localStorage.getItem(('idAlbum')))
    let numberPlayTrack = localStorage.getItem('idTrack')

    if (localStorage.length === 0) {localStorage.setItem('idTrack',Number(1))}
    if (localStorage.getItem('EndOfAlbumTrack') && numberAlbum < 2) {
        localStorage.setItem('idAlbum', numberAlbum += 1)
        localStorage.setItem('idTrack', Number(1))
        localStorage.removeItem('EndOfAlbumTrack');
    } else if (localStorage.getItem('StartOfAlbumTrack') && numberAlbum > 0) {
        localStorage.setItem('idAlbum', numberAlbum -= 1)
        localStorage.setItem('idTrack', Number(massAlbumTrack[numberAlbum].length))
        localStorage.removeItem('StartOfAlbumTrack');
    }

    if (positionXSliderUpTrack > 0) {
        positionXSliderUpTrack = Number(-1)
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` })
    }
    if (positionXSliderUpTrack < this.props.maxPositionSlider) {
        positionXSliderUpTrack = Number(this.props.maxPositionSlider + 1)
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }
        return (
            <div className="wrapper">
                <div className="viewport" onClick={ e => this.SwipePositionTrack()} onMouseDown={ e => mousedown = window.event.clientX} onTouchStart={e => this.OnTouchStartPosition()} onTouchEnd={e => this.OnTouchEndPosition()}>
                    <ul style={ style }>
                    {massTrack0.map(massTrack0 => 
                        <li key={massTrack0[0]}><a className="buttomSliderDown" onClick={() => {
                            if(localStorage.length < 2) {
                                localStorage.setItem('controllMusicTrack', 'HomePage');
                                localStorage.setItem('idTrack',`${massTrack0[0]}`);
                                localStorage.setItem('idAlbum', 0)
                            }
                        }}>
                                <img src={`${massTrack0[2]}`}/>
                                <div className="nameTrack">{massTrack0[3]}</div>
                                <div className="nameArtists">{massTrack0[4]}</div>
                            </a>
                        </li>
                    )}
                    {massTrack1.map(massTrack1 =>
                        <li key={massTrack1[0]}><a className="buttomSliderDown" style={{display: `${this.props.VisibilityOfExtraTracks ? 'flex' : 'none'}`}} onClick={() => {
                            if(localStorage.length < 2) {
                                localStorage.setItem('controllMusicTrack', 'HomePage');
                                localStorage.setItem('idTrack',`${massTrack1[0]}`);
                                localStorage.setItem('idAlbum', 1)
                            }
                        }}>     <img src={`${massTrack1[2]}`}/>
                                <div className="nameTrack">{massTrack1[3]}</div>
                                <div className="nameArtists">{massTrack1[4]}</div>
                            </a>
                        </li>
                    )}
                    {massTrack2.map(massTrack2 =>
                       <li key={massTrack2[0]}><a className="buttomSliderDown" style={{display: `${this.props.VisibilityOfExtraTracks ? 'flex' : 'none'}`}} onClick={() => {
                        if(localStorage.length < 2) {
                            localStorage.setItem('controllMusicTrack', 'HomePage');
                            localStorage.setItem('idTrack',`${massTrack2[0]}`);
                            localStorage.setItem('idAlbum', 2)
                        }
                        }}>     <img src={`${massTrack2[2]}`}/>
                                <div className="nameTrack">{massTrack2[3]}</div>
                                <div className="nameArtists">{massTrack2[4]}</div>
                            </a>
                        </li>
                    )}
                    {massTrack3.map(massTrack3 =>
                       <li key={massTrack3[0]}><a className="buttomSliderDown" style={{display: `${this.props.VisibilityOfExtraTracks ? 'flex' : 'none'}`}} onClick={() => {
                        if(localStorage.length < 2) {
                            localStorage.setItem('controllMusicTrack', 'HomePage');
                            localStorage.setItem('idTrack',`${massTrack3[0]}`);
                            localStorage.setItem('idAlbum', 3)
                        }
                        }}>     <img src={`${massTrack3[2]}`}/>
                                <div className="nameTrack">{massTrack3[3]}</div>
                                <div className="nameArtists">{massTrack3[4]}</div>
                            </a>
                        </li>
                    )}
                    </ul>
                    <ControllTrack massAlbumTrack={massAlbumTrack[numberAlbum][numberPlayTrack]} massTrack={this.props.VisibilityOfExtraTracks ? this.props.massTrack[numberAlbum] : massTrack0}/>
                </div>
            </div>
        );
    }
}

export default sliderDown;