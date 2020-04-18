import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import home from './HomePage.module.css';
import IconBar from './IconBar';
import ClickButton from "../Component/ClickButton";

function HomePage() {  
  return (
    <div className={home.center}>
      <img className={home.logo} src={logo} alt="Tangerine Rye logo" />
        <ClickButton name='ENTER SITE' path='music' buttonStyle='home'/>
        <ClickButton name='TOUR' path='tour' buttonStyle='home'/>
        <ClickButton name='MERCH' path='merch' buttonStyle='home'/>
      <IconBar />
      
    </div>
  );
}

export default HomePage;
