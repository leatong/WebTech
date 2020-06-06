import React from "react";
import headBar from "./OverHeadBar.module.css";
import logo from '../assets/tangerinerye_logo.png';
import {ClickHeadBar} from "../Component/ClickButton";

function OverHeadBar(props) {
    return (
        <div className={headBar.center}>
            <img className={headBar.logo} src={logo} alt="Tangerine Rye logo" />
            <hr style={{backgroundColor: '#FF7A51', border:'transparent', height:'5px', margin:'-3px'}}/>
            <ClickHeadBar path='' name='PORTAL' currentPage={props.currentPage}/>
            <ClickHeadBar path='music' name='MUSIC' currentPage={props.currentPage}/>
            <ClickHeadBar path='tour' name='TOUR' currentPage={props.currentPage}/>
            <ClickHeadBar path='merch' name='SHOP' currentPage={props.currentPage}/>
            <ClickHeadBar path='about' name='ABOUT' currentPage={props.currentPage}/>
        </div>
    )
}

export default OverHeadBar;