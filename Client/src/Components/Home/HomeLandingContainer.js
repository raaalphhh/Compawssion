import React from "react";
import landingimage2 from "./images/landingimage2.png";
import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <img src={landingimage2} alt='Girl holding a Dog'/>
        <div className="adopt-btn">
          <Link to='./pets'><button className="Home-button" onClick={scrollToTop}><p>Adopt a Pet</p><img src={footPrint} alt="footprint" /></button></Link>
        </div>
      </div>
      <div className="homeContainer-right">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
            <p>Life is better </p>
            </div>
             with fur, paws,
            <br />
            and a little chaos!
          </p>
          <p className="home-second-para">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
