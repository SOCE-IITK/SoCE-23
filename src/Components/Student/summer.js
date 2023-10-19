import close from "../Assets/close-btn.png";
import { useState } from "react";
export default function Session() {
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
  const [popup3, setPop3] = useState(false);
  const handleClickOpen3 = () => {
    setPop3(!popup3);
  };
  const closePopup3 = () => {
    setPop3(false);
  };

  if (popup3) {
    document.body.classList.add("active-pop");
  } else {
    document.body.classList.remove("active-pop");
  }
  return (
    <div className="container" id="dasant">
      <div className="row d-flex justify-content-around">
        <div className="col-md-3 fre">
          <div className="row">
            <h3>Social Media Posts</h3>
            <p>
              SOCE publishes various informative posts on a timely basis to
              provide information on trending topics or any informative content
              that sparks curiosity. These posts are designed to keep students
              and faculty up-to-date with the latest developments and trends in
              the field of civil engineering, as well as provide insights into
              related topics that may be of interest.
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
            <h3>Competitions</h3>
            <p>
              To break the monotony of the academic workload during hectic
              semesters, fun competitions are frequently organized to provide
              students with a chance to take a break and enjoy themselves. These
              competitions are designed to be enjoyable and engaging, allowing
              students to relax and have fun while also fostering a sense of
              community and camaraderie among peers.
            </p>
            <div className="row-3">
              <button type="button" class="btn Btn" onClick={handleClickOpen2}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 far">
          <div className="row">
            <h3>Merchandises</h3>
            <p>
              Display your pride as a Civil Engineer from IITK with the official
              SoCE merchandise designed for the civil engineering community. The
              merchandise serves as a symbol of your connection to the
              department, allowing you to proudly showcase your affiliation and
              support for your fellow civil engineering peers
            </p>
            <div className="row-3">
              <button type="button" class="btn Btn" onClick={handleClickOpen3}>
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
                  <h3>Social Media posts by SoCE </h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    1. <strong>Conversation</strong> - Passive Solar Buildings
                    (2nd October 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CjNT75TuEYN/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    2. <strong> Historic Newsletter</strong> - Eads Bridge (8th
                    October 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CjdAhnQPubb/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    3. <strong> Conversation</strong> - Soil Stabilizer- Plastic
                    (22nd October 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CkBYgvnDAFk/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    4. <strong> Conversation</strong> - Kinetic Footfall (12th
                    November 2022 ):{" "}
                    <a href="https://www.instagram.com/p/Ck3MSovDg_2/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    5. <strong>Historic Newsletter </strong> - Bridgewater Canal
                    (18th November 2022 ):{" "}
                    <a href="https://www.instagram.com/p/ClHBY7oDhKF/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    6. <strong> Conversation</strong> - Bio Batteries (6th
                    December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/Cl1YXCDv44B/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    7. <strong> Historic Newsletter </strong> - The Indian
                    Parliament House (12th December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CmD1AaEvA6n/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    8. <strong>Blog</strong> - Application of GIS-GPS in civil
                    engineering (21st December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/Cmbbul3vAz0/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    9. <strong> Conversation</strong> - Self Healing Concrete
                    (28th December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CmtuT9TvXVn/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    10. <strong> Historic Newsletter</strong> - Aqueduct of
                    Segovia (19th January 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CnlnbxGvHNV/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    11. <strong>Conversation</strong> -Modular Construction (7th
                    February 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CoXjL73oO2w/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    12. <strong> Historic Newsletter</strong> - Pont Du Gard
                    (16th February 2023):{" "}
                    <a href="https://www.instagram.com/p/CosZF6DoQGR/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    13. <strong>Conversation</strong> - Translucent Concrete
                    (2nd March 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CpSIenpvpR7/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    14. <strong>Blog</strong> - Optimization using Quantum
                    Computing (16th March 2023 ):{" "}
                    <a href="https://www.instagram.com/p/Cp2A4R3AeUv/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
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
                  <h3>Competitions Organized by SoCE</h3>
                  <img src={close} onClick={closePopup2} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    1. <strong>Game Night</strong> (26th December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CmlLh2rPEHa/?igshid=YmMyMTA2M2Y=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    2. <strong>Architectural photography </strong> (9th January
                    2023 ):{" "}
                    <a href="https://www.instagram.com/p/CnCHcxnjGfX/?igshid=YmMyMTA2M2Y=">
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
        <div>
          {popup3 ? (
            <div className="main">
              <div className="popup-about">
                <div className="popup-header">
                  <h3>Merchandise by SoCE </h3>
                  <img src={close} onClick={closePopup3} alt="" />
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
