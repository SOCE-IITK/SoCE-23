import close from "../Assets/close-btn.png";
import { useState } from "react";

export default function Mitacs() {
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
            <h3>MITACS Info.</h3>
            <p>
              Discover a valuable resource designed to support students in their
              journey to apply for the MITACS Globalink Research Internship
              Programme. Crafted by former participants who have successfully
              completed MITACS internships, this comprehensive guide offers a
              wealth of insights and practical advice.
            </p>
            <div className="row-3">
              <a
                href="https://drive.google.com/drive/folders/1FnbBGsngKu1MHouj9sFlZyH1D2mQqCPg"
                target="_blank"
              >
                <button type="button" className="btn Btn">
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 far">
          <div className="row">
            <h3>Info. Sessions</h3>
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
            <h3>Career Choices</h3>
            <p>
              SOCE conducts a series of live sessions featuring CE IITK alumni
              as guest speakers. These sessions aim to clarify doubts and
              provide guidance to students on their future career choices.
              Alumni share their experiences and insights, offer advice and
              motivation to students, and inspire them to pursue their career
              goals.
            </p>
            <div className="row-3">
              <a
                href="https://drive.google.com/drive/folders/1EZ1EkrFAj9WP9YT6mdJFJeUDmRvH-vzL?usp=sharing"
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
                  <h3>Sessions conducted by SoCE </h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    1. <strong>Intern Chat</strong> - Software Profile (26th
                    June 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfO6NqtjLgl/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    2. <strong>Intern Chat</strong> - Analyst Profile (29th June
                    2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfUQ_EHqjyv/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    3. <strong>Intern Chat</strong> - Quant Profile (2nd July
                    2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfdsAVCj9gY/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    4. <strong>Intern Chat</strong> - Finance Profile (5th July
                    2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfkQfHaK5H9/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    5. <strong>Resume Building Session</strong> - Mr. Ankit
                    Kumar (9th July 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CfvU0KlqwWl/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    6. <strong> Informal Session</strong> - guidance for Y21
                    (27th July 2022 ):{" "}
                    <a href="https://www.instagram.com/p/Cgf489rKpCK/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    7. <strong> Live & Interactive Session</strong> - Research
                    Intern Program : Mr. Yatish Goel (6th September 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CiIrV7NjHy-/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    8. <strong>Career Choices</strong> - Mr. K. Sri Harsha Y8
                    Alum (12th September 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CiVYssGKlHz/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    9. <strong> Informative talk session</strong> - Mr. Prithvi
                    Raj (11th November 2022 ):{" "}
                    <a href="https://www.instagram.com/p/CkygSwajDAS/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    10. <strong>Informative Session</strong> - Intro to Profiles
                    : For Y21 & Y22 (5th December 2022 ):{" "}
                    <a href="https://www.instagram.com/p/Clu9KBBPI-x/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    11. <strong>Career Choices</strong> - Mr. Shubham Gupta Y11
                    Alum (21st January 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CnoGzvovgiz/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    12. <strong>Seminar</strong> - Sustainability practice on
                    Campus (28th January 2023 ):{" "}
                    <a href="https://www.instagram.com/p/Cn2oWEPSPbH/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    13. <strong>Seminar</strong> - Shri Rajendra P. Bhattarai
                    (9th February 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CoUBAFBg5lk/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    14. <strong>Career Choices</strong> - Flt. Lt. Devvrat Singh
                    Jagawat Y12 Alum (10th March 2023 ):{" "}
                    <a href="https://www.instagram.com/p/CpcWPqovUwi/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    15. <strong>Workshop</strong> - Introduction to Open LCA :
                    Mr. Mohd. Kamil Vakil (15th March 2023 ):{" "}
                    <a href="https://www.instagram.com/p/Cpr4PFxgQWd/?igshid=YWVjMmZiZjg=">
                      <strong>Click Here for more info</strong>
                    </a>
                    16. <strong>Y22 Informal Session</strong>
                    <a href="https://drive.google.com/drive/folders/1i0hH7tnFbqRiPIbWkSMvn43pBub-Eekw">
                      <strong>Click Here for more info</strong>
                    </a>
                    <br />
                    17. <strong>Y22 3rd Sem Informal Session</strong>
                    <a href="https://drive.google.com/drive/folders/1C94XBvQAlmp1vliu9lpfDGOz4_XI7gDE">
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
