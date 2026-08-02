import "./../Styles/studentCards.css";

function Template({ props }) {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {props.map((d, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="student-card">

              <div className="student-content">

                <h3>{d.head}</h3>

                <p>{d.text}</p>

                <a
                  href={d.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="read-btn">
                    Read More →
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

export default Template;