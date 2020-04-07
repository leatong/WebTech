import React from 'react';
import logo from './assets/tangerinerye_logo.png';
import home from './HomePage.module.css';

function HomePage() {  
  return (
    <div className={home.header}>
      <img src={logo} alt="Tangerine Rye band logo" />
    </div>
  );
}

export default HomePage;
