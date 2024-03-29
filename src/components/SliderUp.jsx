import React, { Component } from "react";
import './style/homepage.scss';
import png1UpSlider from './Music albums/Bandana/Bandana_I.jpg';
import png2UpSlider from './Music albums/Million Dollar: Business/mqdefault.jpg';
import png3UpSlider from './Music albums/MiyaGi & Andy Panda/miyagi-andy-panda-yamakasi.jpg';
import png4UpSlider from './/Music albums/Classic/klassicheskaya-muzyika.webp'
import buttonLeftSliderUp from './images/chevron-left.png';
import buttonRightSliderUp from './images/chevron-right.png';
import { Link } from 'react-router-dom';

var positionXSliderUpTrack = 0;
var mouseup = 0;
var mousedown = 0;
let touchup = 0;
class sliderUp extends Component {

    constructor() {
        super();
        this.state = {
            style: '',
        };
        this.test100 = {
            number: '',
        };
      }

    LeftPositionTrack(e) {
        if(positionXSliderUpTrack > -600) {
            positionXSliderUpTrack -= 300
            this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
        }
    }

    RightPositionTrack(e) {
        if(positionXSliderUpTrack < 0) {
            positionXSliderUpTrack += 300
            this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
        }
    }

    SwipePositionTrack(e) {
        if(positionXSliderUpTrack > -600 && positionXSliderUpTrack < 1) {
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
        if (positionXSliderUpTrack < -600) {
            positionXSliderUpTrack = Number(-590)
            this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
        }
        if (positionXSliderUpTrack > 0) {
            positionXSliderUpTrack = Number(-1)
            this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` })
        }
        const style = { transform: this.state.style };
        return (
        <div className='sliderUp'>
            <div className="wrapper">
                <div className="viewport" onClick={ e => this.SwipePositionTrack()} onMouseDown={ e => mousedown = window.event.clientX} onTouchStart={e => this.OnTouchStartPosition()} onTouchEnd={e => this.OnTouchEndPosition()}>
                    <ul style={ style }>
                        <li><Link className="linkSliderUp" to={"/bandana"}><img src={png1UpSlider}/></Link></li>
                        <li><Link className="linkSliderUp" to={"/millionDollar"}><img src={png2UpSlider}/></Link></li>
                        <li><Link className="linkSliderUp" to={"/yamakasi"}><img src={png3UpSlider}/></Link></li>
                        <li><Link className="linkSliderUp" to={"/classicAlbum"}><img src={png4UpSlider}/></Link></li>
                    </ul>
                </div>
                <div className="ButtonControls">
                    <div className="button LeftSliderUp" onClick={ e => this.LeftPositionTrack() }><img src={buttonLeftSliderUp}/></div>
                    <div className="button RightSliderUp" onClick={ e => this.RightPositionTrack() }><img src={buttonRightSliderUp}/></div>
                </div>
            </div>
        </div>
        );
    }
}

export default sliderUp;