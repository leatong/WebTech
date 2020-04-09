import React from 'react';
import logo from '../assets/tangerinerye_logo.png';
import home from './HomePage.module.css';
import IconBar from './IconBar';

function HomePage() {  
  return (
    <div className={home.center}>
      <img className={home.logo} src={logo} alt="Tangerine Rye logo" />
      {/* <Button class props={enter} /> */}
      {/* <Button class props={tour} /> */}
      {/* <Button class props={merch} /> */}
      {/* <Button class props={facebook} /> */}
      {/* <Button class props={instagram} /> */}
      {/* <Button class props={contact} /> */}
      {/* <Button class props={spotify} /> */}
      {/* <Button class props={youtube} /> */}
      {/* <Button class props={applemusic} /> */}
      <IconBar />
    </div>
  );
}

export default HomePage;
