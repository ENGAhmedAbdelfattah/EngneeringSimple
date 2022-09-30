import React, { useEffect, useState } from "react";
import landing from "./../../Assets/landing.png";
import lamp from "./../../Assets/lamp.gif";
import electric from "./../../Assets/electric thunderbolt.jpg";
import bookingBtn from "./../../Assets/booking-btn.svg";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const { lang } = props;
  // variable
  const navigate = useNavigate();
  // state
  const [homeText] = useState({
    mainHeader: { en: `Engineering Simple`, ar: `الهندسة ببساطة` },
    paragraph: {
      en: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores nihil ipsa omnis iure nemo consectetur voluptate ducimus harum nulla est voluptas tenetur mollitia minus eaque unde, pariatur sunt adipisci!`,
      ar: `الشركة نفسها هي شركة ناجحة للغاية. لأن العدم الأعظم بحد ذاته ، كل حق ، لا يسعى إليه أحد بسرور ، نحن نقوده ، لا توجد متعة ، المرونة تكون أقل ، ومن أين يتم الحصول عليها!`,
    },
    booking: { en: `Booking now`, ar: `إحجز الآن` },
    videoHeader: { en: `Video about teaching`, ar: `فيديو عن التدريس` },
  });
  const [styleShow, setStyleShow] = useState(true);
  // effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // methods
  const handleScroll = (e) => {
    if (window.scrollY >= 100) {
      setStyleShow(false);
    } else {
      setStyleShow(true);
    }
  };
  const handleBtn = (e) => {
    navigate("/Booking");
  };
  return (
    <>
      <div className="home">
        <div className="landing">
          <div className="flex-box">
            <div className="text-box">
              <h1>
                <img src={lamp} alt="" />
                {lang === "en"
                  ? homeText.mainHeader.en
                  : homeText.mainHeader.ar}
                <img src={lamp} alt="" />
              </h1>
              <p>
                {lang === "en" ? homeText.paragraph.en : homeText.paragraph.ar}
              </p>
              <button className="booking-btn" type="button">
                <span onClick={handleBtn}>
                  {lang === "en" ? homeText.booking.en : homeText.booking.ar}
                </span>
                <img src={bookingBtn} alt="Booking button" />
              </button>
            </div>
            <div className="img-handle">
              <img src={landing} alt="landing" />
            </div>
          </div>
          <div
            className={styleShow ? "mouse" : "hidden"}
            onScroll={handleScroll}
          ></div>
        </div>
        <div className="video-section">
          <img className="electric-first" src={electric} alt="" />
          <img className="electric-last" src={electric} alt="" />
          <div className="video-box">
            <h2>
              {lang === "en"
                ? homeText.videoHeader.en
                : homeText.videoHeader.ar}
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wdZwj_4uMS8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
