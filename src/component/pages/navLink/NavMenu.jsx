import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "./../../../Assets/home.svg";
import booking from "./../../../Assets/booking.svg";
import lecturer from "./../../../Assets/lecturer.svg";
import aboutus from "./../../../Assets/about-us.svg";
import contact from "./../../../Assets/contact.svg";

function NavMenu(props) {
  const { status, onHandleClick, onHandleLang, lang } = props;
  // variable
  const styleClassTwo = status ? "open-icon close-icon" : "open-icon";
  // state
  const [paths] = useState([
    "Home",
    "Booking",
    "Lecturer",
    "AboutUs",
    "Connect",
  ]);
  const [navMenuText] = useState({
    textLink: {
      en: ["Home", "Booking", "Lecturer", "About us", "Connect"],
      ar: ["مسكن", "الحجز", "المحاضر", "معلومات", "الاتصال"],
    },
    langLabel: { en: "en", ar: "ar" },
  });

  const [sources] = useState([home, booking, lecturer, aboutus, contact]);
  return (
    <>
      <div className={styleClassTwo} onClick={onHandleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-menu">
        {paths.map((el, inx) => (
          <NavLink to={"/" + el} key={inx + el}>
            <li>
              <img src={sources[inx]} alt="" />
              <span>
                {lang === "en"
                  ? navMenuText.textLink.en[inx]
                  : navMenuText.textLink.ar[inx]}
              </span>
            </li>
          </NavLink>
        ))}
        <li className="lang" onClick={onHandleLang}>
          {lang === navMenuText.langLabel.en
            ? navMenuText.langLabel.ar
            : navMenuText.langLabel.en}
        </li>
      </ul>
    </>
  );
}

export default NavMenu;
