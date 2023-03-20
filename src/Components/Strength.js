import "./Styles/strength.css";
import { useState } from "react";
import close from "./Assets/close-btn.png";
export default function Strength() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <>
      <div className="container" id="strength">
        <div className="row d-flex justify-content-around">
          {/* <div className="row justify-content-around"> */}
          <div className="str col">
            <div className="row">
              <h1>Strengths</h1>
            </div>
            <div className="row">
              <p>
                STRENGTHS is an annual magazine released by Society of Civil
                engineers approved and appreciated by department of civil
                engineering. The focus of STRENGTHS is to provide an overview of
                the activities of SoCE, various current happening in the field of
                civil engineering and appreciate the department activities.
              </p>
            </div>
            {/* </div> */}
          </div>

          <div className="row d-flex justify-content-around str-row">
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'07</h1>
              <div className="row d-flex justify-content-center str-row">
                <div className="col">
                  <a href="Strengths/Strengths'07.pdf" download>
                    <button className="str-btn">Download</button>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.iitk.ac.in/civil/soce/strengths/Strengths'07.pdf"
                    target="_blank"
                  >
                    <button className="str-btn">Open</button>
                  </a>
                </div>
              </div>

            </div>
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'08</h1>
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <a href="Strengths/Strengths'08.pdf" download>
                    <button className="str-btn">Download</button>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.iitk.ac.in/civil/soce/strengths/Strengths'08.pdf"
                    target="_blank"
                  >

                    <button className="str-btn">Open</button>
                  </a>
                </div>


              </div>
            </div>
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'09</h1>
              <div className="row d-flext justify-content-center">
                <div className="col">
                  <a href="Strengths/Strengths'09.pdf" download>
                    <button className="str-btn">Download</button>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.iitk.ac.in/civil/soce/strengths/Strengths'09.pdf"
                    target="_blank"
                  >
                    <button className="str-btn">Open</button>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className=" row d-flex justify-content-around str-row">
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'22</h1>
              <div className="row d-flext justify-content-center">
                <div className="col">
                  <a href="Strengths/Strengths-22-Magazine-30-09-22.pdf" download>
                    <button className="str-btn">Download</button>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://www.iitk.ac.in/ce/data/Strengths-22-Magazine-30-09-22.pdf"
                    target="_blank"
                  >
                    <button className="str-btn">Open</button>
                  </a>
                </div>

              </div>
            </div>
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'23</h1>
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <button className="str-btn">Download</button>
                </div>
                <div className="col">
                  <button className="str-btn" onClick={handleClickOpen}>
                    Open
                  </button>
                </div>
                {popup ? (
                  <div className="main">
                    <div className="popup">
                      <div className="popup-header">
                        <h1>Strengths'23</h1>
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
            </div>
            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'24</h1>
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <button className="str-btn">Download</button>
                </div>
                <div className="col">
                  <button className="str-btn" onClick={handleClickOpen}>
                    Open
                  </button>
                </div>
                {popup ? (
                  <div className="main">
                    <div className="popup">
                      <div className="popup-header">
                        <h1>Strengths'24</h1>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
