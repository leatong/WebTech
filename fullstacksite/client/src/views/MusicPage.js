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
        <div>
            <OverHeadBar currentPage='MUSIC'/>
            <div className={music.center}>
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
            </div>
            <div className={music.embed}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/haBxkGrYPUI" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    className={music.youtube}></iframe>
                <iframe src="https://open.spotify.com/embed/artist/6N7HQGSTngvAUUqDquoXfI" 
                    width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>                    
            </div>
            <IconBar />
        </div>
    );
}

export default MusicPage;