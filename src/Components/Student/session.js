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
  return (
    <div className="container" id="dasant">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Sessions</h3>
            <p>
              The student community's academic needs are regularly addressed through organized  sessions that provide valuable information to assist with their academic life and  semester requirements. These sessions offer support to students seeking guidance,  resources, and strategies to succeed academically.
            </p>
            <div className="row-3">
              <button type="button" class="btn Btn" onClick={handleClickOpen1}>
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5 far">
          <div className="row">
            <h3>Merchandises</h3>
            <p>
              Display your pride as a Civil Engineer from IITK with the official SoCE merchandise   designed for the civil engineering community. The merchandise serves as a symbol of   your connection to the department, allowing you to proudly showcase your affiliation  and support for your fellow civil engineering peers
            </p>
            <div className="row-3">
              <button type="button" class="btn Btn" onClick={handleClickOpen2}>
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
                  <h3>Sessions conducted by SoCE </h3>
                  <img src={close} onClick={closePopup1} alt="" />
                </div>
                <div className="popup-content">
                  <p>
                    1. <strong>Intern Chat</strong> - Software Profile (26th June 2022 ): <a href="https://www.instagram.com/p/CfO6NqtjLgl/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    2. <strong>Intern Chat</strong> - Analyst Profile (29th June 2022 ): <a href="https://www.instagram.com/p/CfUQ_EHqjyv/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    3. <strong>Intern Chat</strong> - Quant Profile (2nd July 2022 ): <a href="https://www.instagram.com/p/CfdsAVCj9gY/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    4. <strong>Intern Chat</strong> - Finance Profile (5th July 2022 ): <a href="https://www.instagram.com/p/CfkQfHaK5H9/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    5. <strong>Resume Building Session</strong> - Mr. Ankit Kumar (9th July 2022 ): <a href="https://www.instagram.com/p/CfvU0KlqwWl/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    6. <strong> Informal Session</strong> - guidance for Y21 (27th July 2022 ): <a href="https://www.instagram.com/p/Cgf489rKpCK/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    7. <strong> Live & Interactive Session</strong> - Research Intern Program : Mr. Yatish Goel (6th September 2022 ): <a href="https://www.instagram.com/p/CiIrV7NjHy-/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    8. <strong>Career Choices</strong> - Mr. K. Sri Harsha Y8 Alum (12th September 2022 ): <a href="https://www.instagram.com/p/CiVYssGKlHz/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    9. <strong> Informative talk session</strong> -  Mr. Prithvi Raj  (11th November 2022 ): <a href="https://www.instagram.com/p/CkygSwajDAS/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    10. <strong>Informative Session</strong> - Intro to Profiles : For Y21 & Y22  (5th December 2022 ): <a href="https://www.instagram.com/p/Clu9KBBPI-x/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    11. <strong>Career Choices</strong> - Mr. Shubham Gupta Y11 Alum (21st January 2023 ): <a href="https://www.instagram.com/p/CnoGzvovgiz/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    12. <strong>Seminar</strong> -  Sustainability practice on Campus (28th January 2023 ): <a href="https://www.instagram.com/p/Cn2oWEPSPbH/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    13. <strong>Seminar</strong> - Shri Rajendra P. Bhattarai (9th February 2023 ): <a href="https://www.instagram.com/p/CoUBAFBg5lk/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    14. <strong>Career Choices</strong> -  Flt. Lt. Devvrat Singh Jagawat Y12 Alum (10th March 2023 ): <a href="https://www.instagram.com/p/CpcWPqovUwi/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
                    <br/>
                    15. <strong>Workshop</strong> -  Introduction to Open LCA : Mr. Mohd. Kamil Vakil (15th March 2023 ): <a href="https://www.instagram.com/p/Cpr4PFxgQWd/?igshid=YWVjMmZiZjg="><strong>Click Here for more info</strong></a>
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
                    1. <strong>T-shirt</strong> (22nd June 2022 ): <a href="https://www.instagram.com/p/CfCkBU9qRBt/?igshid=YmMyMTA2M2Y="><strong>Click Here for more info</strong></a>
                    <br/>
                    2. <strong>Hoodie and Jacket </strong> (22nd December 2022 ): <a href="https://www.instagram.com/p/CmQho1RPrCn/?igshid=YmMyMTA2M2Y="><strong>Click Here for more info</strong></a>
                    <br/>
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
