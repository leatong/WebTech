import React, { useState } from 'react';
import {Link} from "react-router-dom";

function HoverButton(props) {

    function changeBackground(e) {
        e.target.style.background = 'red';
    }

    function changeBackgroundBack(e) {
        e.target.style.background = 'white';
    }

    return (
        <div>
            <button className={props.styleName}
                    onMouseOver = {changeBackground}
                    onMouseOut = {changeBackgroundBack}>
                {props.name}
            </button>
        </div>
    );
}

export default HoverButton;