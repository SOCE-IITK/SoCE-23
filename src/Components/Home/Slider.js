import React, { useState, useEffect } from "react";
import { content } from "../../Data/slider_data";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Logic to show/hide the Scroll-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="events-section">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="events-header" data-aos="fade-down">
          <span className="events-tag">Departmental Culture</span>
          <h1 className="events-title">
            Recent <span>Activities</span>
          </h1>
        </div>

        {/* EVENTS GRID */}
        <div className="events-grid">
          {content.map((item, index) => (
            <div className="event-card" key={index} data-aos="fade-up">
              <div className="event-content">
                <span className="event-badge">EVENT</span>

                <h2 className="event-heading">{item[1]}</h2>

                <p className="event-date">{item[2]}</p>

                <p className="event-desc">{item[0]}</p>

                <a
                  href={item[3]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-more-link"
                >
                  <button className="view-btn">View More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT CTA BANNER */}
      <div className="contact-banner" data-aos="zoom-in">
        <div className="contact-overlay">
          <h2>Get in touch with any questions, ideas, or feedback</h2>
          <p>We’d love to hear from you. Reach out anytime.</p>

          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showTopBtn && (
        <button 
          className="scroll-to-top" 
          onClick={goToTop}
          title="Go to top"
        >
          ↑
        </button>
      )}
    </section>
  );
}