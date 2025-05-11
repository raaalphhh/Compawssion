import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-facebook"></i>
        <a class="mail-links" href="https://web.facebook.com/castroiamicah">
          Ia Micah G. Castro
        </a>

        <i class="fa fa-facebook"></i>
        <a class="mail-links" href="https://web.facebook.com/imveryweak">
          James Neftali B. Armado
        </a>

        <i class="fa fa-facebook"></i>
        <a class="mail-links" href="https://web.facebook.com/raaalphhhb/">
          Ralph D. Buenaventura
        </a>

        <i class="fa fa-facebook"></i>
        <a class="mail-links" href="https://web.facebook.com/yesuahjirahdlorenzo">
          Yesuah Jirah D. Lorenzo
        </a>

        <i class="fa fa-facebook"></i>
        <a class="mail-links" href="https://web.facebook.com/aieriyosusae">
          Irysse J. Erfe
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
