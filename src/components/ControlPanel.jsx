import React from "react";
import './style/homepage.scss';

function Panel() {
    return (
        <div className="buttonsRightPanel">
            <div className="button home">Home</div>
            <div className="button">Radio</div>
            <div className="button">Podcast</div>
            <div className="button">Downloads</div>
            <div className="button">Library</div>
            <div className="button">Go Premium</div>
            <div className="button">Language</div>
            <div className="nightMode button">
                <div>Night Mode</div>
                <label className="switch">
                    <input></input>
                    <span className="slider"></span>
                </label>
            </div>
            <div className="button">Settings</div>
        </div>
    );
}

export default Panel;