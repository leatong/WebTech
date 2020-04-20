import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import home from './HomePage.module.css';
import IconBar from './IconBar';
import {ClickButton} from "../Component/ClickButton";
import EmailForm from "../Component/EmailForm";

function HomePage() {  
  return (
    <div className={home.center}>
        <img className={home.logo} src={logo} alt="Tangerine Rye logo" />
        <ClickButton name='ENTER SITE' path='music' buttonStyle='outlined'/>
        <ClickButton name='TOUR' path='tour' buttonStyle='outlined'/>
        <ClickButton name='MERCH' path='merch' buttonStyle='outlined'/>
        <EmailForm />
        <IconBar />
    </div>
  );
}

export default HomePage;
