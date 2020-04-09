import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import bandpic from '../assets/bandpic.jpg'
import music from './MusicPage.module.css';
import IconBar from './IconBar';

function MusicPage() {
    return(
        <div className="center">
            <img className={music.logo} src={logo} alt="Tangerine Rye logo" />
            <div className={music.vinyl}></div>
            <img className={music.img} src={bandpic} alt="Tangerine Rye members" />
            <IconBar />
        </div>
    );
}

export default MusicPage;