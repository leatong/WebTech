import React from 'react';
import './IconBar.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import Icon from '@material-ui/core/Icon';

function IconBar() {
    return (
        <div class="footer">
            <ul>
                <li>
                    <a href="https://www.instagram.com/tangerinerye/">
                        <InstagramIcon /> 
                    </a>   
                </li>
                <li>
                    <a href="https://www.facebook.com/tangerinerye/">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC18c12v12WXT4X-yljzwZwg">
                        <YouTubeIcon />
                    </a>
                </li>
                <li>
                    <a href="">
                        <EmailIcon />
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/6N7HQGSTngvAUUqDquoXfI">
                        <Icon className="fab fa-spotify" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon className="fab fa-itunes-note" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default IconBar;