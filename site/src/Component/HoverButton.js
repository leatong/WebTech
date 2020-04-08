import React, { useState } from 'react';
import './../App.css';

function HoverButton() {

    function changeBackground(e) {
        e.target.style.background = 'red';
    }

    function changeBackgroundBack(e) {
        e.target.style.background = 'white';
    }

    return (
        <div className="App">
            <button
                onMouseOver={changeBackground}
                onMouseOut={changeBackgroundBack}>
                Hover over me!
            </button>
        </div>
    );
}

export default HoverButton;