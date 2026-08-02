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
              Friday, April 17, 2026
            </span>

          </div>

          <h1>INFORMAL FAREWELL</h1>

          <h2>Graduating Batch of 2026</h2>

          <div className="event-quote">

            "Let's celebrate a remarkable college life and
            new beginnings ahead!"

          </div>

          <p>

            Join us for an evening dedicated to celebrating
            our graduating civil engineers.

            Reflect on the past and prepare for the journey
            ahead with friends, professors and mentors.

          </p>

          <h4>
            Join us and make it memorable.
          </h4>

        </div>

        <div className="event-right">

          <img
            src="/Gallery/informal.png"
            alt="Informal Farewell"
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