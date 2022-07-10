import { getElementError } from "@testing-library/react";
import React from "react";
import './app.scss';
import png1UpSlider from './Music albums/Bandana/Bandana_I.jpg';
import png2UpSlider from './Music albums/Million Dollar: Business/mqdefault.jpg';
import png3UpSlider from './Music albums/MiyaGi & Andy Panda/miyagi-andy-panda-yamakasi.jpg';

function sliderUp() {
    return (
        <div className='slider'>
            <ul>
                <li><a href="#"><img src={png1UpSlider}/></a></li>
                <li><a href="#"><img src={png2UpSlider}/></a></li>
                <li><a href="#"><img src={png3UpSlider}/></a></li>
            </ul>
        </div>
    );
}

export default sliderUp;