import "normalize.css";
import "./App.scss";
import Router from "./router/Router";
import NavMenu from "./component/pages/navLink/NavMenu";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  const handleClick = (el) => {
    status ? setStatus(false) : setStatus(true);
  };
  const styleClass = status ? "nav-wrapped" : "nav-wrapped close-nav-wrapped";
  
  return (
    <div className="App">
      <div className="app-box">
        <div className={styleClass}>
          <NavMenu status={status} onHandleClick={handleClick} />
        </div>
        <div className="router-wrapped container">
          <div className="container">
            {[...Array(15)].map((el, i) => (
              <div key={i} className="firefly"></div>
            ))}
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
