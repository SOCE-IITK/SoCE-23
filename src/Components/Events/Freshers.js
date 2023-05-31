import close from "../Assets/close-btn.png";
import { useState } from "react";
export default function Freshers() {
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
    <div className="container" id="freshers">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Freshers</h3>
            <p>
              An introductory ice-breaker event for the first years to get them
              incorporated into the culture of IITK. We see massive
              participation from the freshers in fun events as they open up with
              their seniors and get to know their batchmates better.
            </p>
            <div className="row-3">
              <button type="button" class="event-btn" onClick={handleClickOpen1}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5 far">
          <div className="row">
            <h3>Farewell</h3>
            <p>
              SoCE organizes a farewell for its seniors, with a suitable venue,
              invitations to seniors and faculty. It include speeches, and
              entertainment to celebrate the seniors' achievements and
              contributions. Gifts or mementos can be presented as tokens of
              appreciation.
            </p>
            <dv className="row-3">
              <button type="button" class="event-btn" onClick={handleClickOpen2}>
                Read more
              </button>
            </dv>
          </div>
        </div>
        <div>
          {popup1 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Freshers</h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    An introductory ice-breaker event for the first years to get
                    them incorporated into the culture of IITK. We see massive
                    participation from the freshers in fun events as they open
                    up with their seniors and get to know their batchmates
                    better.
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
                  <h3>Farewell</h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                  SoCE organizes a farewell for its seniors, with a suitable venue,
                  invitations to seniors and faculty. It include speeches, and
                  entertainment to celebrate the seniors' achievements and
                  contributions. Gifts or mementos can be presented as tokens of
                  appreciation.

                  <p>
                    1. <strong>Class of 2023</strong>: <a href="https://www.linkedin.com/feed/update/urn:li:activity:7053244336070701056" target="_blank_" ><strong>Click Here for more info</strong></a>
                    <br/>
                    2. <strong>Class of 2022</strong>: <a href="https://www.instagram.com/p/CfgNtuJDIg3/?hl=en"  target="_blank_"><strong>Click Here for more info</strong></a>
                    <br/>
                    3. <strong>Class of 2020</strong>: <a href="https://www.linkedin.com/feed/update/urn:li:activity:6942042103132622848"  target="_blank_"><strong>Click Here for more info</strong></a>
                    <br/>
                    </p>
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
