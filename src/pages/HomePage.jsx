import React, { useEffect } from 'react';
import { useState } from 'react';

import m3mLogo from '../assets/m3mLogo.jpg';
import Belowheader from '../assets/Belowheader.jpg';
import image1 from '../assets/imag1.jpg';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image8 from '../assets/image8.jpg';
import image7 from '../assets/image7.jpg';
import F1 from '../assets/F1.jpg';
import F2 from '../assets/F2.jpg';
import F3 from '../assets/F3.jpg';
import F4 from '../assets/F4.jpg';
import F5 from '../assets/F5.jpg';
import F6 from '../assets/F6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';


const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
const Carousel2 = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="carousel2">
      {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`slide ${slide === idx ? "" : "slide-hidden"}`}
        />
      ))}
      {/* <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" /> */}
      <span className="indicators2">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

const HomePage = () => {
  const [selectedType, setSelectedType] = useState('type1');
  const slidesData = {
    "slides": [
      {
        "src": image2,
        "alt": "Image 1 for carousel"
      },
      {
        "src": image4,
        "alt": "Image 2 for carousel"
      },
      {
        "src": image5,
        "alt": "Image 3 for carousel"
      }
    ]
  };
  const floorPlanData1 = {
    "slides": [
      {
        "src": F1,
        "alt": "Image 1 for carousel"
      },
      {
        "src": F2,
        "alt": "Image 2 for carousel"
      },
      {
        "src": F3,
        "alt": "Image 3 for carousel"
      }
    ]
  };
  const floorPlanData2 = {
    "slides": [
      {
        "src": F4,
        "alt": "Image 1 for carousel"
      },
      {
        "src": F5,
        "alt": "Image 2 for carousel"
      },
      {
        "src": F6,
        "alt": "Image 3 for carousel"
      }
    ]
  };

  return (
    <>
      {/* Navbar Section Start */}
      <div className="navbar">
        <img src={m3mLogo} alt="logo" className="logo-small" />
        <nav className="navbar-navigation">
          <a href="#overview" className="nav-link">OVERVIEW</a>
          <a href="#pricing" className="nav-link">PRICING</a>
          <a href="#highlights" className="nav-link">HIGHLIGHTS</a>
          <a href="#floorplan" className="nav-link">FLOOR PLAN</a>
          <a href="#amenities" className="nav-link">AMENITIES</a>
          <a href="#gallery" className="nav-link">GALLERY</a>
          <a href="#location" className="nav-link">LOCATION</a>
        </nav>
        <div className='navbar-icon'>
          <FontAwesomeIcon icon={faPhoneVolume} className="fa-2x fa-bounce" />
        </div>
      </div>
      {/* Navbar Section End */}



      {/* Welcome Image Start */}

      <div className="welcome-section">
        <img src={Belowheader} alt="Placeholder" />
      </div>
      {/* Welcome Image End */}



      {/* Overview Start */}


      <div className='main-heading'>
        <h1>M3M ALTITUDE <br />LUXURY SUITES & SKYLINE PENTSUITES</h1>
        <hr />

        <div className='overview-section'>
          <div className="text-section">
            <h2 id='main-text'>CORE THOUGHT BEHIND NAME OF THE PROJECT</h2>
            <p>
              <span> M3M Altitude </span>encapsulates the essence of luxury, elegance, and aspiration. Through this name, we aim to convey the unparalleled living experiences and prestige that define this exclusive enclave.
              <br /><br />
              <span>M3M Altitude is not just a name it's a promise of elevated living at its finest!</span>
              <br /><br />
              <span>M3M ALTITUDE </span>is not merely a name; it's a symbol of aspiration and distinction. As we embark on the journey of creating a super luxury real estate project.<span> M3M Altitude</span> embodies the ethos of unparalleled luxury, elevated living experiences, and the pinnacle of sophistication.
            </p>
            <button className="overview-content-button">Get Details →</button>
          </div>
          <div className="image-section">
            <img src={image1} alt="image1" />
          </div>
        </div>
      </div>
      {/* Overview End */}





      {/* Overview Section Two Start */}
      <div className='overview-section-two-main' style={{ backgroundImage: `url(${image2})` }}>
        <div className='overview-section-two-box'>
          <div className='overview-section-heading'>
            <h2>M3M Altitude</h2>
          </div>
          <div className='overview-section-table'>
            <div className='overview-section-table-left-content'>
              <p style={{ marginBottom: '20%' }}>Type</p>
              <p style={{ marginBottom: '20%' }}>Sizes</p>
              <p style={{ marginBottom: '20%' }}>Price</p>
              <p>Location</p>
            </div>
            <div className='overview-section-table-right-content'>
              <p style={{ marginBottom: '20%' }}>4-5BHK+S</p>
              <p style={{ marginBottom: '20%' }}>3750-4250 sq.ft.</p>
              <p style={{ marginBottom: '20%' }}>₹ 10 Crs* Onwards</p>
              <p>Sector 65</p>
            </div>
          </div>
          <div className='overview-section-buttons'>
            <button className='call-button'>Call →</button>
            <button className='details-button'>Get Details →</button>
          </div>
        </div>
      </div>
      {/* Overview Section Two End */}





      {/* Pricing Boxes Start */}
      <div className='pricing-boxes'>
        <div className='pricing-boxes-heading'>
          <h3 className="ititle">
            <span className="suptitle d-block">M3M Altitude</span>
            <strong className="mtitle text-uppercase d-block red">Luxury Opportunities</strong>
          </h3>
        </div>
        <div className='pricing-box'>
          <div className='pricing-box-box'>
            <h3>Type 1</h3>
            <hr />
            4.5 BHK+S<br /> <br />
            3755 sq.ft
            <hr />
            <p>Price</p>
            <h3>₹ 9.90 Crs* Onwards</h3>
            <button className='pricing-box-box-button'>Get details →</button>
          </div>
          <div className='pricing-box-box'>
            <h3>Type 2</h3>
            <hr />
            4.5 BHK+S<br /> <br />
            4245 sq.ft
            <hr />
            <p>Price</p>
            <h3>₹ 11.20 Crs* Onwards</h3>
            <button className='pricing-box-box-button'>Get details →</button>
          </div>
          <div className='pricing-box-box'>
            <h3>Type 3</h3>
            <hr />
            4.5 BHK+S<br /> <br />
            4270 sq.ft
            <hr />
            <p>Price</p>
            <h3>₹ 11.27 Crs* Onwards</h3>
            <button className='pricing-box-box-button'>Get details →</button>
          </div>
        </div>
      </div>
      {/* Pricing Box End */}





      {/* Divider Start */}
      <div className='divider-section'>
        <div className='divider-section-heading'>
          <h2>Let's have a quick discussion with us !</h2>
        </div>
        <div className='divider-section-icons'>
          <div className='divider-section-icons-whatsapp'>
            <FontAwesomeIcon icon={faWhatsapp} beatFade style={{ color: "#ffffff", fontSize: "2em" }} />
          </div>
          <div className='divider-section-icons-phone'>
            <FontAwesomeIcon icon={faPhoneVolume} beatFade style={{ color: "#ffffff", fontSize: "2em" }} />
          </div>
        </div>
      </div>
      {/* Divider End */}



      {/* Gallery Section Start*/}
      <section className="gallery-section">
        <h2 className='gallery-section-h2'>M3M ALTITUDE GALLERY</h2>
        <hr />
        <Carousel data={slidesData.slides} />
      </section>
      {/* Gallery Section End*/}



      {/* Floor Plan Start */}
      <div className='floorPlan'>
        <div className='floorPlan-content'>

          <div className='floorPlan-type'>

            <h2 className='floorPlan-h2'>M3M Altitude Floor Plan</h2>
          

            <div className='floorPlan-types'>
              <div
                className={`floorPlan-type1 ${selectedType === 'type1' ? 'active' : ''}`}
                onClick={() => setSelectedType('type1')}
              >
                LUXURY SUITES
              </div>
              <div
                className={`floorPlan-type2 ${selectedType === 'type2' ? 'active' : ''}`}
                onClick={() => setSelectedType('type2')}
              >
                SKYLINE PENTSUITES
              </div>
            </div>

            <div className='floorPlan-type-button'>
              <button>
                Get Details →
              </button>
            </div>

          </div>

          <div className='floorPlan-images'>

            {selectedType === 'type1' ? (
              <Carousel2 data={floorPlanData1.slides} />
            ) : (
              <Carousel2 data={floorPlanData2.slides} />
            )}
          </div>

        </div>
      </div>

      {/* Floor Plan End */}





    </>
  );
}

export default HomePage;
