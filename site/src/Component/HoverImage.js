import React, { useState } from 'react';
import './../App.css';
import youtube from '../imgs/youtube.png';

function HoverImage() {

    function changeBackground(e) {
        e.target.style.background = 'red';
    }

    function changeBackgroundBack(e) {
        e.target.style.background = 'white';
    }

    return (
        <div /*className="App"*/>
            <a href="http://www.youtube.com">
                <img src={youtube} alt="youtube icon"
                onMouseOver={changeBackground}
                onMouseOut={changeBackgroundBack}/>
            </a>
        </div>
    );
}

export default HoverImage;