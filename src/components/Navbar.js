import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar(props) {
  const menuToggle = () => {
    $(".link-container").slideToggle("slow");
  };

  const clicked = () => {
    $(".link-container").slideUp("slow");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">{props.logo}</Link>
      </div>
      <div className="navLinks">
        <div className="menu" onClick={menuToggle}></div>

        <ul className="link-container">
          <li>
            <Link to="/" onClick={clicked}>
              {props.home}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={clicked}>
              {props.about}
            </Link>
          </li>
          <li>
            <a href="#userguide" onClick={clicked}>
              {props.userguide}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={clicked}>
              {props.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
