import React, { useState } from 'react';

import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image8 from '../assets/image8.jpg';
import image7 from '../assets/image7.jpg';

const Page8 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        image2, 
        image4,
        image8,
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <>
        <h1><span>M3M Altitude Floor Plan</span></h1>

        <div className='box'>
          <button>Luxury Suits</button>
          <button>Skyline Penthouse</button>
          <button>Get Details</button>
        </div>

        <div className='imageBox'>
         
        <button onClick={handlePrev}>L</button> <img src={images[currentIndex]} alt="Displayed" />

          <button onClick={handleNext}>R</button>
        </div>
      </>
    );
}

export default Page8;
