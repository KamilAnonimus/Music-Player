import React, { Component } from "react";
import './style/homepage.scss';
import png1UpSlider from './Music albums/Bandana/Bandana_I.jpg';
import png2UpSlider from './Music albums/Million Dollar: Business/mqdefault.jpg';
import png3UpSlider from './Music albums/MiyaGi & Andy Panda/miyagi-andy-panda-yamakasi.jpg';
import buttonLeftSliderUp from './images/chevron-left.png';
import buttonRightSliderUp from './images/chevron-right.png';

var positionXSliderUpTrack = 0;
var mouseup = 0;
var mousedown = 0;
class sliderUp extends Component {

    constructor() {
        super();
        this.state = {
            style: '',
        };
      }

    LeftPositionTrack(e) {
        positionXSliderUpTrack -= 300
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }

    RightPositionTrack(e) {
        positionXSliderUpTrack += 300
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }

    SwipePositionTrack(e) {
        mouseup = window.event.clientX;
        positionXSliderUpTrack += mouseup - mousedown;
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }

    render () {
        const style = { transform: this.state.style };
        return (
        <div className='sliderUp'>
            <div className="wrapper">
                <div className="viewport" onClick={ e => this.SwipePositionTrack()} onMouseDown={ e => mousedown = window.event.clientX}>
                    <ul style={ style }>
                        <li><a href="#"><img src={png1UpSlider}/></a></li>
                        <li><a href="#"><img src={png2UpSlider}/></a></li>
                        <li><a href="#"><img src={png3UpSlider}/></a></li>
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