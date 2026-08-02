import close from "../Assets/close-btn.png";
import { useState } from "react";

export default function Dasant() {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);

  return (
    <div
      className="container"
      id="dasant"
      style={{ marginBottom: "80px" }}
    >
      <div className="row justify-content-around">

        {/* Dasant Card */}
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="event-card">
            <div className="event-content">
              <h3>Dasant</h3>

              <p>
                The Civil Department's annual dance event, which used to be
                celebrated in 2008, was discontinued due to unforeseen
                circumstances. However, we hope that it will be organized
                again soon.
              </p>

              <button
                className="event-btn"
                onClick={() => setPopup1(true)}
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Stimulus Card */}
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="event-card">
            <div className="event-content">
              <h3>Stimulus</h3>

              <p>
                The Civil Department's Department Day, which was previously
                celebrated in 2008, was discontinued due to unforeseen
                circumstances. However, we hope that it will be organized
                again soon.
              </p>

              <button
                className="event-btn"
                onClick={() => setPopup2(true)}
              >
                Read more
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Dasant Popup */}
      {popup1 && (
        <div className="lecture-modal-overlay">
          <div className="lecture-modal">

            <div className="lecture-modal-header">
              <h1>Dasant</h1>

              <button
                className="close-btn"
                onClick={() => setPopup1(false)}
              >
                ×
              </button>
            </div>

            <hr />

            <div className="lecture-modal-content">
              <p>
                The Civil Department's annual dance event, which used to be
                celebrated in 2008, was discontinued due to unforeseen
                circumstances. However, we hope that it will be organized
                again soon.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Stimulus Popup */}
      {popup2 && (
        <div className="lecture-modal-overlay">
          <div className="lecture-modal">

            <div className="lecture-modal-header">
              <h1>Stimulus</h1>

              <button
                className="close-btn"
                onClick={() => setPopup2(false)}
              >
                ×
              </button>
            </div>

            <hr />

            <div className="lecture-modal-content">
              <p>
                The Civil Department's Department Day, which was previously
                celebrated in 2008, was discontinued due to unforeseen
                circumstances. However, we hope that it will be organized
                again soon.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}