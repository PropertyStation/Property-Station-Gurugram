import React from 'react';
import m3mLogo from '../assets/m3mLogo.jpg';

function Header() {
  return (
    <>
    <div className="header-container">
      <img src={m3mLogo} alt="logo" className="logo-small" />
      <nav className="navigation">
        <a href="#overview" className="nav-link">OVERVIEW</a>
        <a href="#pricing" className="nav-link">PRICING</a>
        <a href="#highlights" className="nav-link">HIGHLIGHTS</a>
        <a href="#floorplan" className="nav-link">FLOOR PLAN</a>
        <a href="#amenities" className="nav-link">AMENITIES</a>
        <a href="#gallery" className="nav-link">GALLERY</a>
        <a href="#loacation" className="nav-link">LOCATION</a>
      </nav>
      <button className="details-button-navbar">Get Details →</button>

    </div>
    </>
    
  );
}

export default Header;
