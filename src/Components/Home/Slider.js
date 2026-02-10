import React, { useState, useEffect } from "react";
import $ from "jquery";
import { content } from "../../Data/slider_data";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    universal(activeIndex);
    // eslint-disable-next-line
  }, []);

  function universal(i) {
    setActiveIndex(i);

    $("#slider-text").animate({ opacity: 0 }, 300, function () {
      $(this).html(content[i][0]).animate({ opacity: 1 }, 200);
    });

    $("#slider-heading").animate({ opacity: 0 }, 300, function () {
      $(this).html(content[i][1]).animate({ opacity: 1 }, 200);
    });

    $("#slider-date").animate({ opacity: 0 }, 300, function () {
      $(this).html(content[i][2]).animate({ opacity: 1 }, 200);
    });

    $("#slider-link").attr("href", content[i][3]);

    let dots = document.getElementsByClassName("indicators");
    for (let k = 0; k < dots.length; k++) {
      dots[k].classList.remove("active-dot");
    }
    dots[i].classList.add("active-dot");
  }

  function next() {
    universal((activeIndex + 1) % content.length);
  }

  function prev() {
    universal((activeIndex - 1 + content.length) % content.length);
  }

  return (
    <section id="home">
      <div className="container">
        <h1 id="recent">Recent Activities</h1>

        <div className="recent-slider">
          <div className="arrow left-arrow" onClick={prev}>
            <i className="fa fa-angle-left"></i>
          </div>

          <div className="arrow right-arrow" onClick={next}>
            <i className="fa fa-angle-right"></i>
          </div>

          <div className="recent-card no-image">
            <div className="recent-text">
              <h2 id="slider-heading">{content[activeIndex][1]}</h2>
              <p id="slider-date" className="date">
                {content[activeIndex][2]}
              </p>

              <div id="slider-text" className="desc">
                {content[activeIndex][0]}
              </div>

              <a
                id="slider-link"
                href={content[activeIndex][3]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-btn">View More</button>
              </a>
            </div>
          </div>

          <div className="dots">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`indicators ${
                  i === activeIndex ? "active-dot" : ""
                }`}
                onClick={() => universal(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-banner">
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
    </section>
  );
}