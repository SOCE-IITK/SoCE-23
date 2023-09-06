import close from "../Assets/close-btn.png";
import { useState } from "react";
export default function Colloquium() {
  const [popup1, setPop1] = useState(false);
  const handleClickOpen1 = () => {
    setPop1(!popup1);
  };
  const closePopup1 = () => {
    setPop1(false);
  };

  if (popup1) {
    document.body.classList.add("active-pop1");
  } else {
    document.body.classList.remove("active-pop1");
  }

  const [popup2, setPop2] = useState(false);
  const handleClickOpen2 = () => {
    setPop2(!popup2);
  };
  const closePopup2 = () => {
    setPop2(false);
  };

  if (popup2) {
    document.body.classList.add("active-pop");
  } else {
    document.body.classList.remove("active-pop");
  }
  return (
    <div className="container" id="colloquium">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Seminars</h3>
            <p>
              We organize seminars to create awareness on various topics. Topics
              are selected to ensure significance to the target audience. The
              seminars provide a platform for individuals to learn and gain new
              insights into different areas of interest.
            </p>
            <dv className="row-3">
              <button
                type="button"
                class="event-btn"
                onClick={handleClickOpen1}
              >
                Read more
              </button>
            </dv>
          </div>
        </div>
        <div className="col-md-5 far">
          <div className="row">
            <h3>Workshops</h3>
            <p>
              Workshops on software and technologies are organized to provide
              information about their use and benefits. These workshops are
              aimed at individuals who want to learn about the latest
              advancements in technology and gain practical skills.
            </p>
            <div className="row-3">
              <button
                type="button"
                class="event-btn"
                onClick={handleClickOpen2}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
        <div>
          {popup1 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Seminars</h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    We organize seminars to create awareness on various topics.
                    Topics are selected to ensure significance to the target
                    audience. The seminars provide a platform for individuals to
                    learn and gain new insights into different areas of
                    interest.
                  </p>
                  <p>
                    1. <strong>Sustainability Practices on Campus</strong> (28th
                    January 2023):
                    <br />
                    About Seminar: LSoCE cordially invites you to attend the
                    seminar on Sustainability Practices on Campus. We have Prof.
                    Abhas Singh and Prof. Rajat Mittal as the speakers. The
                    Session will be around, tree transplantation, waste
                    management and recycling,​ water harvesting, preserving
                    green areas, and other sustainable activities on the campus.
                    <br />
                    Speaker:{" "}
                    <strong>Prof. Abhas Singh and Prof Rajat Mittal</strong>
                    <br />
                    {/* Slides:{" "}
                    <a
                      href="https://docs.google.com/presentation/d/1STQCNYhLbeMLAcJP31SOMUOnb8cOZGgA/edit?usp=share_link&ouid=113101467709173957270&rtpof=true&sd=true"
                      target="_blank"
                    >
                      <strong>Click Here</strong>
                    </a>
                    <br />
                    Youtube:{" "}
                    <a
                      href="https://www.youtube.com/@societyofcivilengineersiit3172"
                      target="_blank"
                    >
                      <strong>Click Here</strong>
                    </a> */}
                    <br></br>
                    2.{" "}
                    <strong>
                      Lessons from Austin's Full-Scale Step-Feed Biological
                      Nutrient Removal Demonstration
                    </strong>{" "}
                    (9th February 2023):
                    <br />
                    About Seminar: The seminar will highlight the background and
                    the need for BNR demonstration, a brief introduction to
                    step-feed, and the biological nutrient removal process, the
                    modifications made at the plant for the full-scale study, a
                    summary of the results of the two-year study, the
                    difficulties, challenges, and lessons learned from the
                    study. The Step-Feed BNR process is now widely used around
                    the world.
                    <br />
                    Speaker:{" "}
                    <strong>Distinguished Alum Shri Raajendra Bhattarai</strong>
                    <br />
                    <br></br>
                    3.{" "}
                    <strong>
                      Insights into Urban Transport needs and Role of modern
                      Metros in Indian Cities
                    </strong>{" "}
                    (31st March 2023):
                    <br />
                    About Seminar: The seminar will highlight the background and
                    the need for BNR demonstration, a brief introduction to
                    step-feed, and the biological nutrient removal process, the
                    modifications made at the plant for the full-scale study, a
                    summary of the results of the two-year study, the
                    difficulties, challenges, and lessons learned from the
                    study. The Step-Feed BNR process is now widely used around
                    the world.
                    <br />
                    Speaker: <strong>Shri Keshav Kumar</strong>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {popup2 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Workshops</h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    Workshops on software and technologies are organized to
                    provide information about their use and benefits. These
                    workshops are aimed at individuals who want to learn about
                    the latest advancements in technology and gain practical
                    skills.
                  </p>
                  <p>
                    1. <strong>Introduction to OpenLCA</strong> (12th March
                    2023):
                    <br />
                    About LCA: LCA is a tool used to evaluate a product's or
                    process's environmental impacts over its entire life cycle,
                    from raw material extraction to end-of-life disposal. It
                    enables us to make informed sustainable decisions about
                    products and processes thereby also giving opportunities for
                    improvements to identify and cut back waste and pollution.
                    Sustainability has become an increasingly important
                    consideration in all engineering fields and LCA is a crucial
                    tool in achieving sustainable development. Big corporations
                    in domains like, but not limited to sustainable financing,
                    trading, FMCG & Manufacturing are conducting LCA on their
                    products and processes to identify the scope of improvements
                    to meet their set SDG goals. The workshop aims to introduce
                    OpenLCA software used to conduct such assessments.
                    <br />
                    Speaker: <strong>Mr. Mohd. Kamil Vakil</strong>
                    <br />
                    Slides:{" "}
                    <a
                      href="https://docs.google.com/presentation/d/1STQCNYhLbeMLAcJP31SOMUOnb8cOZGgA/edit?usp=share_link&ouid=113101467709173957270&rtpof=true&sd=true"
                      target="_blank"
                    >
                      <strong>Click Here</strong>
                    </a>
                    <br />
                    Youtube:{" "}
                    <a
                      href="https://www.youtube.com/@societyofcivilengineersiit3172"
                      target="_blank"
                    >
                      <strong>Click Here</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
