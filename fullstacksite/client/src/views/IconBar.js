import React from 'react';
import style from './IconBar.module.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import Icon from '@material-ui/core/Icon';

function StyledIcon(props) {
    return (
        <li>
            <a href={props.link}>
                <props.icon className={style.icon} />
            </a>
        </li>
    );
}

function StyledFaIcon(props) {
    return(
        <li>
            <a href={props.link}>
                <div className={style.icon}>
                    <Icon className={props.icon} />
                </div>
            </a>
        </li>
    );
}

function IconBar() {
    return (
        <div className={style.footer}>
            <ul>
                <StyledIcon
                    link="https://www.instagram.com/tangerinerye/"
                    icon={InstagramIcon}
                />
                <StyledIcon
                    link="https://www.facebook.com/tangerinerye/"
                    icon={FacebookIcon}
                />
                <StyledIcon
                    link="https://www.youtube.com/channel/UC18c12v12WXT4X-yljzwZwg"
                    icon={YouTubeIcon}
                />
                <StyledIcon
                    link=""
                    icon={EmailIcon}
                />
                <StyledFaIcon
                    link="https://open.spotify.com/artist/6N7HQGSTngvAUUqDquoXfI"
                    icon="fab fa-spotify"
                />
                <StyledFaIcon
                    link="https://music.apple.com/gb/artist/tangerine-rye/id1441879382"
                    icon="fab fa-itunes-note"
                />
            </ul>
        </div>
    );
}

export default IconBar;