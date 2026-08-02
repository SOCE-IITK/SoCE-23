import { useState } from "react";
import "./hero.css";
import close from "../Assets/close-btn.png";

export default function Hero() {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    document.body.classList.add("active-pop");
  };

  const closePopup = () => {
    setPopup(false);
    document.body.classList.remove("active-pop");
  };

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>SOCIETY OF CIVIL</h1>
        <h1>ENGINEERS</h1>

        <span className="hero-subtitle">
          INDIAN INSTITUTE OF TECHNOLOGY, KANPUR
        </span>

        <button className="hero-btn" onClick={openPopup}>
          ABOUT US
        </button>
      </div>

      {popup && (
        <div className="main">
          <div className="popup-about">

            <div className="popup-header">
              <h3>About Society of Civil Engineers</h3>

              <img
                src={close}
                alt="Close"
                onClick={closePopup}
              />
            </div>

            <div className="popup-content">

              <p>
                SOCE (Society of Civil Engineers, IIT Kanpur) is a non-profit
                organization. It serves as a link between enrolled Civil
                Engineering students, alumni and professors at IIT Kanpur.
                This society is an effort to allow free communication and
                sharing of ideas and information among all. The constant support
                and help from the students and faculty members is helping this
                society to help more and more number of students every day.
                The only thing that we want to say to all the members of this
                society is, Keep it up your noble work!!
              </p>

              <p>
                Years of research in higher education support the fact that
                student–faculty interaction is positively associated with
                academic performance, personal development, educational
                aspirations, career prospects and curriculum development.
                Therefore, better interaction between students and faculty is
                necessary for any educational institute's overall development.
                The Society of Civil Engineers actively strengthens this
                interaction through workshops, talk series, alumni events,
                departmental gatherings and many other technical and cultural
                activities. We continuously work to bring students and faculty
                together on one platform and make this initiative a great
                success.
              </p>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}