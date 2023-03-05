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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining.
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
