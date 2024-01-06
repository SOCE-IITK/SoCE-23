import "./Styles/strength.css";
import { useState } from "react";
import close from "./Assets/close-btn.png";

export default function Portal() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <>
      <div className="container" id="portal">
        <div className="row">
          <div className="str">
            <div className="row">
              <h1>Portals</h1>
            </div>
            <div className="row">
              <p>
                Please find attached the links to the dedicated webpages of the
                Internship portal and Conclave portal, the yearly fest of the
                Department of Civil Engineering. You can use these links to
                access the respective websites.
              </p>
            </div>
          </div>

          <div className="str-row row d-flex justify-content-around">
            <div className="str-card ptr col-md-4">
              <h1 className="text-center">Internship</h1>
              <a
                href="https://forms.gle/uwztLG2DqikoEbQH7"
                target="_blank
              "
              >
                <button className="str-btn1" onClick={handleClickOpen}>
                  Open
                </button>
              </a>
              {/* {popup ? (
              <div className="main">
                <div className="popup">
                  <div className="popup-header">
                    <h1>Internship</h1>
                    <img src={close} onClick={closePopup} alt="" />
                  </div>
                  <div>
                    <p className="pop">Coming Soon!</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )} */}
            </div>
            <div className="str-card ptr col-md-4">
              <h1 className="text-center">Conclave</h1>
              <a
                href="https://sankalaniitk.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="str-btn1">Open</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
