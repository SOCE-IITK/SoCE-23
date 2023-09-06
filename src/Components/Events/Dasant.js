import close from "../Assets/close-btn.png";
import { useState } from "react";
export default function Dasant() {
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
    <div className="container" id="dasant">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Dasant</h3>
            <p>
              The Civil Department's annual dance event, which used to be
              celebrated in 2008, was discontinued due to unforeseen
              circumstances. However, we hope that it will be organized
              again soon.
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
            <h3>Stimulus</h3>
            <p>
              The Civil Department's Department Day, which was previously
              celebrated in 2008, was discontinued due to unforeseen
              circumstances. However, we hope that it will be organized
              again soon.
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
                  <h3>Dasant</h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                  The Civil Department's Department Day, which was previously
                  celebrated in 2008, was discontinued due to unforeseen
                  circumstances. However, we hope that it will be organized
                  again soon.
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
                  <h3>StimuluS</h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                  The Civil Department's Department Day, which was previously
                  celebrated in 2008, was discontinued due to unforeseen
                  circumstances. However, we hope that it will be organized
                  again soon.
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
