import "./Styles/contact.css";
import location from "./Assets/location.png";
import Email from "./Assets/email.png";
import Phone from "./Assets/phone.png";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your response has been recorded!");

    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
  };

  return (
    <section className="contact-section">

      <div className="contact-container">

        <div className="contact-card">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <h2>Let's get in touch</h2>

            <p className="contact-desc">
              You can get in touch with us at any time by phone or email
              with any questions or comments you may have.
            </p>

            <div className="contact-details">

              <div className="contact-item">

                <div className="icon-box">
                  <img src={location} alt="" />
                </div>

                <div>
                  <span>ADDRESS</span>
                  <h5>WLE-301, IIT Kanpur, Uttar Pradesh</h5>
                </div>

              </div>

              <div className="contact-item">

                <div className="icon-box">
                  <img src={Email} alt="" />
                </div>

                <div>
                  <span>EMAIL SUPPORT</span>
                  <h5>soce@iitk.ac.in</h5>
                </div>

              </div>

              <div className="contact-item">

                <div className="icon-box">
                  <img src={Phone} alt="" />
                </div>

                <div>
                  <span>DIRECT HOTLINE</span>
                  <h5>+91-7906379797</h5>
                </div>

              </div>

            </div>

            <div className="social-section">

              <h4>CONNECT WITH US :</h4>

              <div className="social-icons">

                <a
                  href="https://www.facebook.com/soce.iitk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="https://www.youtube.com/@societyofcivilengineersiit3172"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>

                <a
                  href="https://www.instagram.com/soce.iitk/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/society-of-civil-engineers-iitk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>

              </div>

            </div>

          </div>

          {/* CENTER DIVIDER */}

          <div className="divider">
            <div className="diamond"></div>
          </div>

          {/* RIGHT SIDE */}

          <div className="contact-form">

            <h2>Contact us</h2>

            <form onSubmit={handleSubmit} autoComplete="off">

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                rows="6"
                placeholder="Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}