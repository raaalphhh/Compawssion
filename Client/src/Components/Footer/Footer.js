import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="Compawssion Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          <a
            className="contact-links"
            href="https://web.facebook.com/castroiamicah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i> Ia Micah
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://web.facebook.com/imveryweak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i> James Neftali
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://web.facebook.com/raaalphhhb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i> Ralph
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://web.facebook.com/yesuahjirahdlorenzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i> Yesuah Jirah
          </a>
          <a
            className="contact-links"
            href="https://web.facebook.com/aieriyosusae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i> Irysse
          </a>
        </p>
        <p>&copy; 2025 Emerging Technologies Project</p>
      </div>
      <div className="admin-login-container">
        <Link to="/admin">
          <button className="admin-login-btn">Admin Login</button>
        </Link>
      </div>
    </footer>
  );D:\School Things\etech\newpetsheesh\Compawssion\Client\src\Components\Footer\Footer.js
};

export default Footer;
