import close from "../Assets/close-btn.png";
import { useState } from "react";

export default function Research_Seminar() {
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
    <div className="container" id="dasant">
      <div className="row d-flex justify-content-around">
        <div className="col-md-3 fre">
          <div className="row">
            <h3>Research Seminar Series</h3>
            <p>
              The student community's academic needs are regularly addressed
              through organized sessions that provide valuable information to
              assist with their academic life and semester requirements. These
              sessions offer support to students seeking guidance, resources,
              and strategies to succeed academically.
            </p>
            <div className="row-3">
              <button type="button" class="btn Btn" onClick={handleClickOpen1}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 far">
          <div className="row">
            <h3>Placement Postulates<span className="text-red-500 text-xs font-bold ml-1 align-super">New</span>
            </h3>
            <p>
              SoCE provides a series of blogs where graduating seniors share
              their placement experiences, advice on how to handle the process
              from beginning to end, and insights into their interview
              experiences. These blogs offer valuable guidance to students
              preparing for their own placement interviews.
            </p>
            <div className="row-3">
              <a href="/postulates" target="_blank">
                <button type="button" className="btn Btn">
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 far">
          <div className="row">
            <h3>Surge Info.</h3>
            <p>
              A comprehensive guide has been created for students applying for
              SURGE, which is prepared by seniors who have completed SURGE
              projects in the past. The guide provides general guidelines on how
              to approach the application process, including tips and strategies
              for selecting projects and securing letters of recommendation.
              This detailed guide aims to assist students in navigating the
              SURGE application process with confidence and success.
            </p>
            <div className="row-3">
              <a
                href="https://docs.google.com/presentation/d/16aynAi7si6xusKQDUBU2DoO7xBxIhYdg/edit?usp=sharing&ouid=113101467709173957270&rtpof=true&sd=true"
                target="_blank"
              >
                <button type="button" className="btn Btn">
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          {popup1 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Research Seminar Series </h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <h3>Research Seminar - 1st Session </h3>
                  <p>
                    1. <strong>Mansha Mushtaq-</strong> Stability Of Horizontal
                    Plate Anchors in Unsaturated Soil:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    2. <strong>Prasad Jayant Deshpande-</strong> Fog Detection
                    and Uncertainty Estimation Using INSAT-3D Observations:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    3. <strong>Pankaj Mishra-</strong> Influence of Aggregate
                    Distribution on the Chloride Resistance of Concrete: An
                    Image Analysis:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    4. <strong>Aman Kumar Singh-</strong> Distortions in MLS
                    Lidar Data of Moving Objects:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    5. <strong>Debabrota Das-</strong> Concept of Travel Time
                    Reliability, its Measures, and Application in the Analysis
                    of Passengers’ Journey Time and Delay of Ferry Transport
                    across the NW-1 :{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    6. <strong> Aamna Sarfaraz-</strong>Seismic Behaviour of
                    Setback Buildings:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    7. <strong> Harshal Tikam-</strong> Integrated Water
                    Resource Management Plan for Sustainable Water
                    Infrastructure in India:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    8. <strong>Abhiram Shukla-</strong> A Roadmap for
                    Environmental Assessment of Road Construction Projects in
                    India:{" "}
                    <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    <h3>Research Seminar - 2nd Session </h3>
                    <p>
                      1. <strong>Surabhi Maurya-</strong> A Hybrid Reliability
                      Model Considering Combined Effects of Aleatory and
                      Epistemic Uncertainties on Rock Tunnel Stability{" "}
                      <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                        <strong>Click Here for more info</strong>
                      </a>
                      <br />
                      2. <strong>Uma Mahesh-</strong> Current Knowledge,
                      Challenges, Facilitating Factors from the National Survey
                      on Sustainability in the Building and Construction (B&C)
                      Sector{" "}
                      <a href="https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==">
                        <strong>Click Here for more info</strong>
                      </a>
                      <br />
                    </p>
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
                  <h3>Merchandise by SoCE </h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    1. <strong>T-shirt</strong> (22nd June 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfCkBU9qRBt/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    2. <strong>Hoodie and Jacket </strong> (22nd December 2022
                    ):{" "}
                    <a href="https://www.instagram.com/p/CmQho1RPrCn/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
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