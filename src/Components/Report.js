import "./Styles/strength.css";

export default function Portal() {
  return (
    <div className="container" id="strength">

      {/* ================= HERO ================= */}

      <div className="strength-hero">

        <h1>Reports</h1>

        <p>
          Please find the end-term reports and the ratification
          lists of the Society of Civil Engineers, IIT Kanpur.
          These documents provide details of activities,
          achievements and annual handovers.
        </p>

      </div>

      {/* ================= CARDS ================= */}

      <div className="row g-4">

        {/* End Term */}

        <div className="col-lg-6">

          <div className="strength-card">

            <h2>End Term Reports</h2>

            <div className="strength-buttons">

              <a
                href="https://drive.google.com/drive/folders/1EvF5v9GR3zeat1G_-7GgPnESAg1GfAko?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="strength-btn">
                  Open
                </button>
              </a>

            </div>

          </div>

        </div>

        {/* Ratification */}

        <div className="col-lg-6">

          <div className="strength-card">

            <h2>Ratification Lists</h2>

            <div className="strength-buttons">

              <a
                href="https://drive.google.com/drive/folders/1EvF5v9GR3zeat1G_-7GgPnESAg1GfAko?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="strength-btn">
                  Open
                </button>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}