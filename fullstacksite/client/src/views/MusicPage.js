import React from 'react';
import bandpic from '../assets/bandpic.jpg'
import album from '../assets/album1.png';
import lemon from '../assets/lalalemon.png';
import honey from '../assets/honey.png';
import music from './MusicPage.module.css';
import IconBar from './IconBar';
import OverHeadBar from "./OverHeadBar";
import headBar from "./OverHeadBar.module.css";

function MusicPage() {
    return (
        <div className={headBar.overview}>
            <OverHeadBar currentPage='music'/>
            <div className={music.center}>
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
                <iframe title="Honey Youtube" width="560" height="315" src="https://www.youtube.com/embed/haBxkGrYPUI" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                    className={music.youtube}></iframe>
                <iframe title="Tangerine Rye Spotify" src="https://open.spotify.com/embed/artist/6N7HQGSTngvAUUqDquoXfI" 
                    width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <IconBar />
        </div>
    );
}

export default MusicPage;