import "./Styles/strength.css";
import { useState } from "react";
import close from "./Assets/close-btn.png";
export default function Strength() {
  const [popup23, setPopup23] = useState(false);
  const [popup24, setPopup24] = useState(false);
  const handleOpenPopup23 = () => {
    setPopup23(true);
  };

  const handleClosePopup23 = () => {
    setPopup23(false);
  };

  const handleOpenPopup24 = () => {
    setPopup24(true);
  };

  const handleClosePopup24 = () => {
    setPopup24(false);
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
                the activities of SoCE, various current happening in the field
                of civil engineering and appreciate the department activities.
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
                    href="https://drive.google.com/file/d/11-3rw3KWXIIYsuhnLrHrGTPssc_ooPoR/view?usp=drivesdk"
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
                    href="https://drive.google.com/file/d/10weNXst68gZ7ZtyHZdMIQoFgXoc_1trA/view?usp=drivesdk"
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
                    href="https://drive.google.com/file/d/10uXoAALwBnAH2-mxAqSasFScorgfxWjA/view?usp=drivesdk"
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
                  <a
                    href="Strengths/Strengths-22-Magazine-30-09-22.pdf"
                    download
                  >
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
              <div className="row d-flext justify-content-center">
                <div className="col">
                  <a
                    href="https://drive.google.com/file/d/1M53RSvcYgZht_OLeiBYhn4dgxF1Mo6Fx/view?usp=sharing"
                    download
                  >
                    <button className="str-btn">Download</button>
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://drive.google.com/file/d/1M53RSvcYgZht_OLeiBYhn4dgxF1Mo6Fx/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="str-btn">Open</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="str-card col-md-3">
              <h1 className="text-center">Strengths'24</h1>
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <button className="str-btn">Download</button>
                </div>
                <div className="col">
                  <button className="str-btn" onClick={handleOpenPopup24}>
                    Open
                  </button>
                </div>
                {popup24 ? (
                  <div className="main">
                    <div className="popup">
                      <div className="popup-header">
                        <h1>Strengths'24</h1>
                        <img src={close} onClick={handleClosePopup24} alt="" />
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
