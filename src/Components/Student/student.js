export default function Student() {
  return (
    <section id="student">
      <div className="container">

        {/* =========================
            STUDENT HERO
        ========================= */}

        <div className="stu">

          <div className="student-badge">
            ● ACTIVE PORTAL
          </div>

          <h1>STUDENT</h1>

          <p>
            Our society aims to foster a culture of learning and growth that
            goes beyond the traditional classroom experience.
            <br />
            <br />
            Here, you will find information about our events, initiatives,
            and resources that are designed to support your academic and
            professional development.
          </p>

        </div>


        {/* =========================
            5TH SEM RESOURCES
        ========================= */}

        <div className="sem-resources-section">

          <div className="sem-resources-content">

            {/* <div className="student-badge">
              ● ACADEMIC RESOURCES
            </div> */}

            <h1>UG 5th Sem Resources</h1>

            <p>
              Access study materials, notes, previous resources and other
              useful academic content for the 5th semester.
            </p>

            <a
              href="https://drive.google.com/drive/folders/1DWiN_hgNtOu6SIn0zYPKvDNaiScaJlUW"
              target="_blank"
              rel="noopener noreferrer"
              className="sem-resources-btn"
            >
              View Resources →
            </a>

          </div>

        </div>


        {/* =========================
            STUDENT CARDS
        ========================= */}

        {/* Student Cards will come here */}

      </div>
    </section>
  );
}