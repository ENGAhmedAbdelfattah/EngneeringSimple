import React, { useEffect, useState } from "react";
import landing from "./../../Assets/landing.png";
import lamp from "./../../Assets/lamp.gif";
import electric from "./../../Assets/electric thunderbolt.jpg";
document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
function Home() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [styleShow, setStyleShow] = useState(true);
  const handleScroll = (e) => {
    if (window.scrollY >= 100) {
      setStyleShow(false);
    } else {
      setStyleShow(true);
    }
  };
  return (
    <>
      <div className="home">
        <div className="landing">
          <div className="flex-box">
            <div className="text-box">
              <h1>
                <img src={lamp} alt="" />
                Engineering Simple
                <img src={lamp} alt="" />
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                maiores nihil ipsa omnis iure nemo consectetur voluptate ducimus
                harum nulla est voluptas tenetur mollitia minus eaque unde,
                pariatur sunt adipisci!
              </p>
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
            <h2>Video about teaching</h2>
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/wdZwj_4uMS8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
