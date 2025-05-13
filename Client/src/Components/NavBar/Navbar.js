import React from "react";
import { Link } from "react-router-dom";
import Compawssion2 from "./images/Compawssion2.png";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={Compawssion2} alt="Compawssion Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/admin">
          <button className="Navbar-button">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
