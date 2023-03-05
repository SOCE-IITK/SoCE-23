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
        <div className="str">
          <div className="row">
            <h1>Portals</h1>
          </div>
          <div className="row">
            <p>
            Attached are the dedicated webpages of the Internship portal as well as the Yearly fest of Department of  Civil Engineering, which is known as CivERE.
To go to the website, use the links that are provided below.
            </p>
          </div>
        </div>

        <div className="str-row">
          <div className="ptr">
            <h1 className="text-center">Internship</h1>
            <button className="str-btn" onClick={handleClickOpen}>
              Open
            </button>
            {popup ? (
              <div className="main">
                <div className="popup">
                  <div className="popup-header">
                    <h1>Internship</h1>
                    <img src={close} onClick={closePopup} alt="" />
                  </div>
                  <div>
                    <p className="pop">COMING SOON</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="str-card ptr">
            <h1 className="text-center">CivERE</h1>
            <a
              href="https://www.iitk.ac.in/ce/civere/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="str-btn">Open</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
