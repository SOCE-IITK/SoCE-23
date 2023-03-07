import { useEffect, useState } from "react";
import "../Styles/about.css";
import close from "../Assets/close-btn.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid" id="about">
      <div className="row">
        <div className="col" id="soce-name" data-aos="fade-up">
          <h3>Society of</h3>
          <h3>Civil Engineers</h3>
        </div>
      </div>
      <div className="row">
        <div
          className="col"
          id="about-col"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <button
            id="about-btn"
            type="button"
            className="btn btn-light"
            onClick={handleClickOpen}
          >
            About Us
          </button>
        </div>
      </div>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup-about">
              <div className="popup-header">
                <h1> About SoCE</h1>
                <img src={close} onClick={closePopup} alt="" />
              </div>
              <div className="popup-content">
                <p>
                  The Society of Civil Engineers (SOCE) is an organization that
                  is student-run and does not seek to make a profit. Its primary
                  objective is to serve as a link between enrolled undergraduate
                  and postgraduate students in the Department of Civil
                  Engineering, the faculty of that department, and the graduates
                  of IIT Kanpur. Our mission is to assist publicize the many
                  different types of research that are conducted within the CE
                  department and to arrange social and professional activities
                  that will build and enrich the CE community. By hosting social
                  events as part of our students' extracurricular activities, we
                  take on the role of providing appropriate student development.
                  "Freshers Night," which serves as an ice-breaker event for
                  newcomers, and "Farewell," which is held for the graduating
                  batch, are just two examples of the events that are arranged
                  by SOCE during the course of the year. We make it our mission
                  to serve the interests of the student body in every way we
                  can. We assist students gain new skills and improve existing
                  ones by guiding them through a variety of projects and holding
                  workshops in both core and non-core areas. In addition to
                  this, we link the seniors of the senior batches with the
                  juniors so that the seniors may mentor the juniors and share
                  with them their successful placement and internship
                  experiences. In addition, we put up for viewing the curriculum
                  vitae of one of our most recent graduates so that current
                  students can use it as a point of reference while writing
                  their own. Also, we produce an annual issue of a topical
                  magazine. This magazine not only provides students and
                  graduates with a forum in which to share their perspectives
                  and judgments on their own branch, but it also highlights the
                  most recent events that have taken place in the branch.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
