import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "./../../../Assets/home.svg";
import booking from "./../../../Assets/booking.svg";
import lecturer from "./../../../Assets/lecturer.svg";
import aboutus from "./../../../Assets/about-us.svg";
import contact from "./../../../Assets/contact.svg";

function NavMenu(props) {
  const [paths] = useState([
    "Home",
    "Booking",
    "Lecturer",
    "AboutUs",
    "Connect",
  ]);
  const [textLink] = useState([
    "Home",
    "Booking",
    "Lecturer",
    "About us",
    "Connect",
  ]);

  const [sources] = useState([home, booking, lecturer, aboutus, contact]);
  const styleClassTwo = props.status ? "open-icon close-icon" : "open-icon";
  return (
    <>
      <div className={styleClassTwo} onClick={props.onHandleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-menu">
        {paths.map((el, inx) => (
          <NavLink to={"/" + el}>
            <li key={inx + el}>
              <img src={sources[inx]} alt="" />
              <span>{textLink[inx]}</span>
            </li>
          </NavLink>
        ))}
        <li className="lang">Ar</li>
      </ul>
    </>
  );
}

export default NavMenu;
