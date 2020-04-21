import React from "react";
import headBar from "./OverHeadBar.module.css";
import {ClickHeadBar} from "../Component/ClickButton";

function OverHeadBar(props) {
    return (
        <div className={headBar.center}>
            <ClickHeadBar path='' name='PORTAL' currentPage={props.currentPage}/>
            <ClickHeadBar path='music' name='MUSIC' currentPage={props.currentPage}/>
            <ClickHeadBar path='tour' name='TOUR' currentPage={props.currentPage}/>
            <ClickHeadBar path='merch' name='SHOP' currentPage={props.currentPage}/>
            <hr style={{backgroundColor: '#FF7A51', border:'transparent', height:'5px', margin:'-3px'}}/>
        </div>
    )
}

export default OverHeadBar;