import React, { Component } from "react";
import './style/homepage.scss';
import png1DownSlider from './Music albums/Bandana/kizaru - 5 Nights Crazy/maxresdefault.jpg';
import png2DownSlider from './Music albums/Bandana/Big Baby Tape kizaru - 99 Problems/Big Baby Tape kizaru - 99 Problems.jpeg';
import png3DownSlider from './Music albums/Million Dollar: Business/MORGENSHTERN - Aristocrat/maxresdefault.jpg';
import png4DownSlider from './Music albums/Million Dollar: Business/MORGENSHTERN - Dinero/maxresdefault (1).jpg';
import png5DownSlider from './Music albums/Bandana/Big Baby Tape kizaru - Andrew Story/4ce060e6a227604982673e9763c76225.1000x1000x1.jpg';
import png6DownSlider from './Music albums/Bandana/Big Baby Tape kizaru - Bandana/jIhub_up7sHKMb_370x370.jpeg';
import png7DownSlider from './Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Medicine/maxresdefault.jpg';
import png8DownSlider from './Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Minor/MiyaGi & Andy Panda - Minor.jpeg';
import png9DownSlider from './Music albums/Million Dollar: Business/MORGENSHTERN - GTA/hqdefault.jpg';
import png10DownSlider from './Music albums/Million Dollar: Business/MORGENSHTERN - Hublot/20914dff41a86128311979d523022e93-250x250-11-11.jpg';

var positionXSliderUpTrack = 0;
var mouseup = 0;
var mousedown = 0;
class sliderDown extends Component {


    constructor() {
        super();
        this.state = {
            style: '',
        };
      }

      SwipePositionTrack(e) {
        mouseup = window.event.clientX;
        positionXSliderUpTrack += mouseup - mousedown;
        this.setState({ style: `translate3d(${positionXSliderUpTrack}px, 0px, 0px)` });
    }

    render () {
        const style = { transform: this.state.style };
        return (
            <div className="wrapper">
                <div className="viewport" onClick={ e => this.SwipePositionTrack()} onMouseDown={ e => mousedown = window.event.clientX}>
                    <ul style={ style }>
                        <li><a href="#"><img src={png1DownSlider}/></a></li>
                        <li><a href="#"><img src={png2DownSlider}/></a></li>
                        <li><a href="#"><img src={png3DownSlider}/></a></li>
                        <li><a href="#"><img src={png4DownSlider}/></a></li>
                        <li><a href="#"><img src={png5DownSlider}/></a></li>
                        <li><a href="#"><img src={png6DownSlider}/></a></li>
                        <li><a href="#"><img src={png7DownSlider}/></a></li>
                        <li><a href="#"><img src={png8DownSlider}/></a></li>
                        <li><a href="#"><img src={png9DownSlider}/></a></li>
                        <li><a href="#"><img src={png10DownSlider}/></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default sliderDown;