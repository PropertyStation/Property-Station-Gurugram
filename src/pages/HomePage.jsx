import React from 'react';
import Header from "../components/HeaderBar";
import Belowheader from '../assets/Belowheader.jpg';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>


      <br></br><br></br>
      <img src={Belowheader} alt="Placeholder" style={{ width: '1310px', display: 'block', borderRadius: '5px', marginLeft: '1px'}} />

    </>

  );
}


export default HomePage;
