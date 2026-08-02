import "./Styles/strength.css";

const strengths = [
  {
    title: "Strengths'07",
    download: "Strengths/Strengths'07.pdf",
    open: "https://drive.google.com/file/d/11-3rw3KWXIIYsuhnLrHrGTPssc_ooPoR/view?usp=drivesdk",
  },
  {
    title: "Strengths'08",
    download: "Strengths/Strengths'08.pdf",
    open: "https://drive.google.com/file/d/10weNXst68gZ7ZtyHZdMIQoFgXoc_1trA/view?usp=drivesdk",
  },
  {
    title: "Strengths'09",
    download: "Strengths/Strengths'09.pdf",
    open: "https://drive.google.com/file/d/10uXoAALwBnAH2-mxAqSasFScorgfxWjA/view?usp=drivesdk",
  },
  {
    title: "Strengths'22",
    download: "Strengths/Strengths-22-Magazine-30-09-22.pdf",
    open: "https://www.iitk.ac.in/ce/data/Strengths-22-Magazine-30-09-22.pdf",
  },
  {
    title: "Strengths'23",
    download:
      "https://drive.google.com/file/d/1M53RSvcYgZht_OLeiBYhn4dgxF1Mo6Fx/view?usp=sharing",
    open:
      "https://drive.google.com/file/d/1M53RSvcYgZht_OLeiBYhn4dgxF1Mo6Fx/view?usp=sharing",
  },
  {
    title: "Strengths'24",
    download:
      "https://drive.google.com/file/d/1HUqoCZ-sqmppWxT_-BCdGLFtBlW79did/view",
    open:
      "https://drive.google.com/file/d/1HUqoCZ-sqmppWxT_-BCdGLFtBlW79did/view",
  },
];

export default function Strength() {
  return (
    <div className="container" id="strength">

      {/* Hero Section */}

      <div className="strength-hero">

        <h1>Strengths</h1>

        <p>
          <strong>STRENGTHS</strong> is the annual magazine released by the
          Society of Civil Engineers, IIT Kanpur. It showcases the
          department's achievements, student activities, research,
          technical events, and highlights from throughout the academic
          year while celebrating the contributions of the civil
          engineering community.
        </p>

      </div>

      {/* Cards */}

      <div className="row g-4 mt-2">

        {strengths.map((item, index) => (

          <div
            key={index}
            className="col-xl-4 col-lg-4 col-md-6"
          >

            <div className="strength-card">

              <div>

                <h2>{item.title}</h2>

              </div>

              <div className="strength-buttons">

                <a href={item.download} download>

                  <button className="strength-btn">
                    Download
                  </button>

                </a>

                <a
                  href={item.open}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="strength-btn outline">
                    Open
                  </button>

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}