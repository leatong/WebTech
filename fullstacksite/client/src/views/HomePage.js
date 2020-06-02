import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import home from './HomePage.module.css';
import IconBar from './IconBar';
import {ClickHomeButton} from "../Component/ClickButton";
import EmailForm from "../Component/EmailForm";

function HomePage() {  
  return (
    <div className={home.center}>
        <img className={home.logo} src={logo} alt="Tangerine Rye logo" />
        <ClickHomeButton name='ENTER SITE' path='music' buttonStyle='outlined'/>
        <ClickHomeButton name='TOUR' path='tour' buttonStyle='outlined'/>
        <ClickHomeButton name='MERCH' path='merch' buttonStyle='outlined'/>
        <ClickHomeButton name='ABOUT' path='about' buttonStyle='outlined'/>
        <EmailForm />
        <IconBar />
    </div>
  );
}

export default HomePage;
