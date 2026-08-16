import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import { Link, useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="home-dark">

      {/* ================= HEADER ================= */}

      <div className="section-heading">

        <span>DEPARTMENTAL CULTURE</span>

        <h2>
          Recent <span>Activities</span>
        </h2>

      </div>

      {/* ================= TWO CARDS ================= */}

      <div className="activity-grid">

        <Link to="/events" className="activity-card">

          <h5>Click Here</h5>

          <h3>Events</h3>

          <p>
            The society organizes technical talks,
            industrial visits, workshops, competitions
            and departmental events for Civil Engineering
            students at IIT Kanpur.
          </p>

        </Link>

        <Link to="/strengths" className="activity-card">

          <h5>Our Strengths</h5>

          <h3>Strengths</h3>

          <p>
            Our alumni network, faculty guidance,
            industry collaborations and technical
            community create opportunities beyond classrooms.
          </p>

        </Link>

      </div>

      {/* Divider */}

      <div className="section-divider"></div>

      {/* ================= FEATURED EVENT ================= */}

      <div className="featured-event">

        <div className="event-left">

          <div className="event-top">

            <div className="event-badge">

              ● UPCOMING EVENT

            </div>

            <span className="event-date">
              {/* Coming Soon... */}
            </span>

          </div>

          <h1>FRESHER'S PARTY</h1>

          <h2>Welcome Y26</h2>

          <div className="event-quote">

            "New campus, new friends, new adventures — let’s make the journey unforgettable!"

          </div>

          <p>

            Welcome, Batch of Y26! Get ready to step into a new chapter of your college life 
            and become a part of the Civil Engineering family.
             Join us for an evening of fun, interaction, 
             and memorable moments with your seniors and batchmates.

          </p>

          <h4>
            Your IITK journey starts here. Let’s make it memorable!
          </h4>

        </div>

        <div className="event-right">

          <img
            src="/Gallery/freshers26.png"
            alt="Freshers"
          />

        </div>

      </div>

      <div className="section-divider"></div>

      {/* ================= CONTACT ================= */}

      <div className="contact-banner">

        <h2>
          Get in touch with any questions,
          ideas, or feedback
        </h2>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </div>

      {/* ================= TOP BUTTON ================= */}

      {showTopBtn && (

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>

      )}

    </section>
  );
}

export default Slider;