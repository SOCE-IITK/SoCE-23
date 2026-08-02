import { useState } from "react";
import "../Styles/Events.css";

export default function DrDevendraLecture() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProf, setSelectedProf] = useState("");

  return (
    <>
      {/* ================= CARD ================= */}

      <div className="event-card">

        <div className="event-content">

          <h3>Guest Lectures</h3>

          <p>
            The Department of Civil Engineering regularly organizes
            distinguished guest lectures by eminent academicians,
            researchers and industry leaders. These lectures provide
            students with exposure to cutting-edge research,
            technological innovations and real-world engineering
            practices.
          </p>

          <button
            className="event-btn"
            onClick={() => setOpenModal(true)}
          >
            Read More →
          </button>

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {openModal && (

        <div className="lecture-modal-overlay">

          <div className="lecture-modal">

            {/* HEADER */}

            <div className="lecture-modal-header">

              <h1>Guest Lectures</h1>

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

            <div className="lecture-modal-content">

              <p>
                <strong>
                  Dr. Devendra Shukla Distinguished Lecture
                </strong>
              </p>

              <p>
                The Department of Civil Engineering successfully
                organized the Dr. Devendra Shukla Distinguished
                Lecture on <b>24 March 2026</b>. The lecture was
                delivered by Prof. T. G. Sitharam, Distinguished
                Professor at IISc Bangalore, former Director of IIT
                Guwahati and former Chairman of AICTE.
              </p>

              <p>
                <strong>Lecture Topic:</strong><br />
                Coastal Reservoirs for Water Security and
                Environmental Stewardship: Technology,
                Innovation and Ideas for Offshore
                Geotechnologies.
              </p>

              {/* PROFESSOR BUTTONS */}

              <div className="lecture-prof-buttons">

                <button
                  onClick={() => setSelectedProf("sitharam")}
                >
                  Prof. T. G. Sitharam
                </button>

                <button
                  onClick={() =>
                    setSelectedProf("bhattacharjee")
                  }
                >
                  Prof. Rajendra Bhattacharjee
                </button>

              </div>

              {/* SITHARAM */}

              {selectedProf === "sitharam" && (

                <div className="lecture-gallery">

                  <img src="/s1.jpeg" alt="Sitharam 1" />
                  <img src="/s2.jpeg" alt="Sitharam 2" />
                  <img src="/s3.jpeg" alt="Sitharam 3" />
                  <img src="/s4.jpeg" alt="Sitharam 4" />

                </div>

              )}

              {/* BHATTACHARJEE */}

              {selectedProf === "bhattacharjee" && (

                <div className="lecture-gallery">

                  <img src="/bh1.jpeg" alt="Bhattacharjee 1" />
                  <img src="/bh2.jpeg" alt="Bhattacharjee 2" />
                  <img src="/bh3.jpeg" alt="Bhattacharjee 3" />

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </>
  );
}