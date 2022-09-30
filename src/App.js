import "normalize.css";
import "./App.scss";
import Router from "./router/Router";
import NavMenu from "./component/pages/navLink/NavMenu";
import { useState } from "react";

function App() {
  // state
  const [status, setStatus] = useState(false);
  const styleClass = status ? "nav-wrapped" : "nav-wrapped close-nav-wrapped";
  const [dir, setDir] = useState(
    document.getElementsByTagName("html")[0].getAttribute("dir")
  );
  const [lang, setLang] = useState(
    document.getElementsByTagName("html")[0].getAttribute("lang")
  );
  // methods
  const handleClick = (el) => {
    status ? setStatus(false) : setStatus(true);
  };
  const handleLang = () => {
    if (lang === "en" && dir === "ltr") {
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      setLang("ar");
      setDir("rtl");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      setLang("en");
      setDir("ltr");
    }
  };
  return (
    <div className="App">
      <div className="app-box">
        <div className={styleClass}>
          <NavMenu
            status={status}
            onHandleClick={handleClick}
            onHandleLang={handleLang}
            lang={lang}
          />
        </div>
        <div className="router-wrapped container">
          <div className="container">
            {[...Array(15)].map((el, i) => (
              <div key={i} className="firefly"></div>
            ))}
            <Router lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
