import close from "../Assets/close-btn.png";
import { useState } from "react";
export default function Colloquium() {
  const [popup1, setPop1] = useState(false);
  const handleClickOpen1 = () => {
    setPop1(!popup1);
  };
  const closePopup1 = () => {
    setPop1(false);
  };

  if (popup1) {
    document.body.classList.add("active-pop1");
  } else {
    document.body.classList.remove("active-pop1");
  }

  const [popup2, setPop2] = useState(false);
  const handleClickOpen2 = () => {
    setPop2(!popup2);
  };
  const closePopup2 = () => {
    setPop2(false);
  };

  if (popup2) {
    document.body.classList.add("active-pop");
  } else {
    document.body.classList.remove("active-pop");
  }
  return (
    <div className="container" id="colloquium">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Seminars</h3>
            <p>
              We organize seminars to create awareness on various topics. Topics
              are selected to ensure significance to the target audience. The
              seminars provide a platform for individuals to learn and gain new
              insights into different areas of interest.
            </p>
            <dv className="row-3">
              <button type="button" class="event-btn" onClick={handleClickOpen1}>
                Read more
              </button>
            </dv>
          </div>
        </div>
        <div className="col-md-5 far">
          <div className="row">
            <h3>Worshops</h3>
            <p>
              Workshops on software and technologies are organized to provide
              information about their use and benefits. These workshops are aimed
              at individuals who want to learn about the latest advancements in
              technology and gain practical skills.
            </p>
            <div className="row-3">
              <button type="button" class="event-btn" onClick={handleClickOpen2}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div>
          {popup1 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Seminars</h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                  We organize seminars to create awareness on various topics. Topics
                  are selected to ensure significance to the target audience. The
                  seminars provide a platform for individuals to learn and gain new
                  insights into different areas of interest.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {popup2 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Worshops</h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                  Workshops on software and technologies are organized to provide
                  information about their use and benefits. These workshops are aimed
                  at individuals who want to learn about the latest advancements in
                  technology and gain practical skills.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
