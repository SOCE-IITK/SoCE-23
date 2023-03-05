import { useEffect, useState } from "react";
import "../Styles/about.css";
import close from "../Assets/close-btn.png";
import AOS from "aos";
import 'aos/dist/aos.css'
export default function About() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  useEffect(()=>{
    AOS.init({duration: 2000})
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
        <div className="col" id="about-col" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2000">
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
                <h1> ABOUT SOCE</h1>
                <img src={close} onClick={closePopup} alt="" />
              </div>
              <div className="popup-content">
                <p>
                The Society of Civil Engineers (SOCE) is a non-profit, student-run organization whose primary goal is to act as a link between enrolled Civil Engineering UG and PG students, the faculty of the Dept. of Civil Engineering, and the alumni of IIT Kanpur.
We aim to organize social and professional activities which strengthen and enrich the CE community and to help publicize various research activities within the department. We take on the responsibility of proper student nurturing by organizing social events as part of extracurricular activities. Some of the events organized by SOCE throughout the year include "Freshers Night" as an ice-breaker event for newcomers, “Farewell” for the graduating batch, and so on.
We strive to work for the benefit of the student community. We conduct workshops and projects to help the students learn and enhance their skills in both the core and non-core sectors. We also connect the junior batches with the seniors who guide and share with them their successful placement and internship stories.
We also offer on display the resume of our most recent alumni that serves as a point of reference for those newly creating their resumes.
We also publish a yearly thematic magazine that highlights the latest happenings in the branch as well as allows the students as well as the alumni a platform to showcase their thoughts and impressions towards their branch.

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
