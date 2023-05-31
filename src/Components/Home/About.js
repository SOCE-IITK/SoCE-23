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

  if(popup){
    document.body.classList.add('active-pop')
  }
  else{
    document.body.classList.remove('active-pop')
  }

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
                <h3> About Society of Civil Engineers</h3>
                <img src={close} onClick={closePopup} alt="" />
              </div>
              <div className="popup-content">
                <p>
                  SOCE (society of civil engineers, IIT Kanpur) is a non-profit
                  organization. It serves as a link between enrolled civil
                  engineering students, alumni and professors at IIT Kanpur.
                  This society is an effort to allow free communication and
                  sharing of ideas and information among all. The constant
                  support and help from the students and faculty members is
                  helping this society to help more and more number of students
                  every day. The only thing that we want to say to all the
                  members of this society is, Keep it up your noble work!!
                </p>
                <p>
                  Years of research in higher education supports the fact that
                  student‐faculty interaction is positively associated with
                  several aspects of student success, for example, academic
                  performance, persistence to graduation, personal and
                  intellectual development, educational aspirations,
                  satisfaction with faculty and department, career prospects,
                  curriculum development, etc. The interaction has been
                  identified as one of the primary sources influencing students'
                  attitudes, interests , and values and plays a vital role in
                  the learning environment. Therefore, better interaction
                  between students and faculty is necessary for any educational
                  institute's overall development. In order to develop a good
                  interaction between students and faculty of the Civil
                  Engineering Department of IITK, The Society Of Civil Engineers
                  plays an active role in improving the Faculty-Student
                  interaction in the department. This is done through a series
                  of cultural (departmental get-togethers ) and intellectual
                  (Talk Series, Workshops,) events. Such events are organized
                  with extreme levels of enthusiasm among students and
                  faculties. We always work hard in order to bring students and
                  faculties on the same platform, so now, we should understand
                  our responsibilities and make this idea a huge success.
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
