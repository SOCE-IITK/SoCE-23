import { useState } from "react";
import "../Styles/Events.css";

export default function DrDevendraLecture() {

  const [openModal, setOpenModal] = useState(false);
  const [selectedProf, setSelectedProf] = useState("");

  return (
    <>
      {/* -------- CARD -------- */}

      <div className="event-box">

        <h1>Guest lectures</h1>

        <p>
          The Department of Civil Engineering successfully 
          organized the Dr. Devendra Shukla Distinguished 
          Lecture on 24th March 2026. The lecture was delivered 
          by Prof. T G Sitharam, distinguished faculty member 
          at IISc Bangalore, former Director of IIT Guwahati,
          and former Chairman of AICTE.
        </p>

        <button
          className="event-btn"
          onClick={() => setOpenModal(true)}
        >
          Read more
        </button>

      </div>

      {/* -------- MODAL -------- */}

      {openModal && (

        <div className="lecture-modal-overlay">

          <div className="lecture-modal">

            {/* -------- HEADER -------- */}

            <div className="lecture-modal-header">

              <h1>Guest lectures</h1>

              <button
                className="close-btn"
                onClick={() => {
                  setOpenModal(false);
                  setSelectedProf("");
                }}
              >
                ×
              </button>

            </div>

            <hr />

            {/* -------- CONTENT -------- */}

            <div className="lecture-modal-content">

              <p>
                <b>Title of the talk:</b> Coastal Reservoirs for Water 
                Security and Environmental Stewardship: Technology, 
                Innovation and Ideas for Offshore Geotechnologies.
              </p>

              {/* -------- PROF BUTTONS -------- */}

              <div className="lecture-prof-buttons">

                <button
                  onClick={() => setSelectedProf("sitharam")}
                >
                  Prof. T G Sitharam
                </button>

                <button
                  onClick={() => setSelectedProf("bhattacharjee")}
                >
                  Prof. Rajendra Bhattacharjee
                </button>

              </div>

              {/* -------- SITHARAM IMAGES -------- */}

              {selectedProf === "sitharam" && (

                <div className="lecture-gallery">

                  <img src="/s1.jpeg" alt="s1" />
                  <img src="/s2.jpeg" alt="s2" />
                  <img src="/s3.jpeg" alt="s3" />
                  <img src="/s4.jpeg" alt="s4" />

                </div>

              )}

              {/* -------- BHATTACHARJEE IMAGES -------- */}

              {selectedProf === "bhattacharjee" && (

                <div className="lecture-gallery">

                  <img src="/bh1.jpeg" alt="bh1" />
                  <img src="/bh2.jpeg" alt="bh2" />
                   <img src="/bh3.jpeg" alt="bh3" />

                </div>

              )}

            </div>

          </div>

        </div>

      )}
    </>
  );
}