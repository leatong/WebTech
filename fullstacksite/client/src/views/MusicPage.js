import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import bandpic from '../assets/bandpic.jpg'
import album from '../assets/album1.png';
import lemon from '../assets/lalalemon.png';
import honey from '../assets/honey.png';
import music from './MusicPage.module.css';
import IconBar from './IconBar';
import OverHeadBar from "./OverHeadBar";

function MusicPage() {
    return (
        <div className={music.center}>
            <OverHeadBar currentPage='MUSIC'/>
            <img className={music.logo} src={logo} alt="Tangerine Rye logo" />
            <div className={music.vinyl}>
                <img className={music.img} src={bandpic}
                     alt="Tangerine Rye members" />
                <img id="album" className={music.album} src={album} 
                     alt="Tangerine Rye album cover" />
                <img className={music.lemon} src={lemon}
                     alt="La la lemonade song cover" />
                <img className={music.honey} src={honey}
                     alt="Honey song cover" />
            </div>
            <IconBar />
        </div>
    );
}

export default MusicPage;