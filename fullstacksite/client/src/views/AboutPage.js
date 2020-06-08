import OverHeadBar from "./OverHeadBar";
import IconBar from './IconBar';
import React from "react";
import about from "./AboutPage.module.css";
import bandPic from "../assets/bandpic.jpg";
import oscar from "../assets/Oscar.png";
import hal from "../assets/Hal.png";
import jordan from "../assets/Jordan.png";
import Button from "@material-ui/core/Button";
import headBar from "../views/OverHeadBar.module.css";

function AboutPage() {
    return (
        <div className={headBar.overview}>
            <OverHeadBar currentPage='about'/>
            <div className={about.tile}>
                <img className={about.image} src={bandPic} alt="The band: Jordan (Guitarist/Vocalist), Hal (Bassist/Vocalist), Oscar (Drummer)"/>
                <div className={about.text}>
                    <div className={about.right}>
                        <p className={about.subtitle}> The Band</p>
                        <p className={about.content}>
                            Jordan (vocals and guitar) and Hal (bass and vocals) met at a summer
                            camp in Cambridge aged 15 and became friends over a shared interest in
                            classic rock, which was very uncommon amongst their peers. The passion
                            for music continues to grow and manifest itself in this current band with
                            Oscar Reynolds on drums. Their journey from their teen-hood band to the
                            upcoming EP to be released early next month is woven into the very fabric
                            of the music...
                        </p>
                    </div>
                </div>
            </div>
            <div className={about.tile}>
                <div className={about.text}>
                    <div className={about.left}>
                        <p className={about.subtitle}>Jordan</p>
                        <p className={about.content}>
                            Jordan is a singer-guitarist, who’s a bit of an energetic
                            scatterbrain. Much less serious than these photos suggest.
                            Raised on popular music of the 20th century, and a student of
                            the blues, his influences range from classic rock bands such as
                            The Beatles and Led Zeppelin, to old school Soul like Sam Cooke
                            and Ray Charles, and blues greats like BB King and T-Bone Walker.
                            While he is a geek of all things guitar, he is first and
                            foremost a songwriter and aims to “say” things with music in
                            this respect, considering McCartney his one musical icon.
                        </p>
                    </div>
                </div>
                <img className={about.image} src={jordan} alt="Jordan Susanto Guitarist"/>
            </div>
            <div className={about.tile}>
                <img className={about.image} src={hal} alt="Hal Bassist"/>
                <div className={about.text}>
                    <div className={about.right}>
                        <p className={about.subtitle}>Hal</p>
                        <p className={about.content}>
                            Hal is a bass player. And bass players will be bass players.
                            He also has some serious singing chops! Though generally on the
                            more reserved side, the inception of his passion for music initially
                            stemmed from the real heavy stuff in his teens!! Nowadays he’d name
                            Led Zeppelin’s John Paul Jones the bass player he aspires to be, as
                            Jonesy is the sweet spot between Funk/Soul groove and hard driving
                            Blues based Rock music! His other rock influences include Duff
                            Mckagan of Guns N’ Roses; and being classically trained, has always
                            had deep admiration for Queen in their operatic approach to popular
                            rock. Hal also enjoys contemporary RnB such as Daniel Caesar &
                            Labrinth.
                        </p>
                    </div>
                </div>
            </div>
            <div className={about.tile}>
                <div className={about.text}>
                    <div className={about.left}>
                        <p className={about.subtitle}>Oscar</p>
                        <p className={about.content}>
                            Apart from being a seriously grooving mofo and all
                            around excellent drummer/musician, Oscar’s also the most endearing
                            sweetheart. He mainly comes from the funk & soul side of things, but
                            loves everything from James Brown, The Meters & Lettuce to Little Feat
                            and the Tedeschi/Trucks BandWhich, according to this band’s general
                            approach, aren’t very different at all. In addition being a highly
                            proficient drummer, he is also a passionate songwriter and composer.
                        </p>
                    </div>
                </div>
                <img className={about.image} src={oscar} alt="Oscar Drummer"/>
            </div>
            <div className={about.footer}>
                <Button onClick={() => topFunction()} style={{"fontWeight": "bold"}}>Back to top</Button>
            </div>
            <IconBar />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default AboutPage;