import React, { useState, useEffect } from "react";
import $ from "jquery";
import { content, img } from "../../Data/slider_data";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    universal(activeIndex);
  }, []);

  function universal(i) {
    setActiveIndex(i);

    $("#slider-text").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][0]).animate({ opacity: 1 }, 200);
    });

    $("#slider-heading").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][1]).animate({ opacity: 1 }, 200);
    });

    $("#slider-date").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][2]).animate({ opacity: 1 }, 200);
    });

    if (img[i]) {
      $("#slider-img").show().animate({ opacity: 0 }, 400, function () {
        $(this).attr("src", img[i]).animate({ opacity: 1 }, 300);
      });
    } else {
      $("#slider-img").hide();
    }

    $("#slider-link").attr("href", content[i][3]);

    // indicators update
    let h = document.getElementsByClassName("indicators");
    for (let k = 0; k < h.length; k++) {
      h[k].classList.remove("fa-circle");
      h[k].classList.add("fa-circle-thin");
    }
    h[i].classList.remove("fa-circle-thin");
    h[i].classList.add("fa-circle");
  }

  function customf() {
    let nextIndex = activeIndex + 1;
    if (nextIndex > 3) nextIndex = 0;
    universal(nextIndex);
  }

  function customp() {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) prevIndex = 3;
    universal(prevIndex);
  }

  return (
    <div className="container slider-parent">
      {/* Header */}
      <div className="row">
        <div className="col">
          <h1 id="recent">Recent Activities</h1>
        </div>
      </div>

      {/* Slider content */}
      <div className="row slider-row">
        <div className="col-12 slider-content-col">
          <div className="container slider-content">

            {/* Left & Right Arrows */}
            <div className="arrow left-arrow" onClick={customp}>
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="arrow right-arrow" onClick={customf}>
              <i className="fa fa-angle-right"></i>
            </div>

            <div className="row">
              {/* Image */}
              {img[activeIndex] ? (
                <div className="col-lg-4 col-md-12 slider-image-container">
                  <img id="slider-img" src={img[activeIndex]} alt="activity" />
                </div>
              ) : null}

              {/* Text */}
              <div
                className={
                  img[activeIndex]
                    ? "col-lg-8 col-md-12"
                    : "col-12 d-flex justify-content-center"
                }
              >
                <SlideText activeIndex={activeIndex} hasImage={!!img[activeIndex]} />
              </div>
            </div>

            {/* Indicators */}
            <div className="row circles">
              <div
                className="col"
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  className="fa fa-circle-thin indicators"
                  onClick={() => universal(0)}
                ></i>
                <i
                  className="fa fa-circle-thin indicators"
                  onClick={() => universal(1)}
                ></i>
                <i
                  className="fa fa-circle-thin indicators"
                  onClick={() => universal(2)}
                ></i>
                <i
                  className="fa fa-circle-thin indicators"
                  onClick={() => universal(3)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row my-4 getm">
        <div className="col-sm-9">
          <h5>
            Get in touch with any questions, ideas, or feedback you may have.
          </h5>
        </div>
        <div className="col-sm-3">
          <a href="/contact-us">
            <button type="button" className="mybtn btn">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SlideText({ activeIndex, hasImage }) {
  return (
    <div
      className="container-fluid"
      style={!hasImage ? { maxWidth: "80%" } : {}}
    >
      <div className="white">
        <div className="row">
          <div className="col">
            <h1 id="slider-heading">{content[activeIndex][1]}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 id="slider-date">{content[activeIndex][2]}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              id="slider-text"
              style={{
                maxHeight: "200px",
                overflowY: "auto",
                paddingRight: "15px",
                marginBottom: "10px",
              }}
            >
              {content[activeIndex][0]}
            </div>
          </div>
        </div>
        <div className="row readmore">
          <div
            className="col"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <a
              id="slider-link"
              href={content[activeIndex][3]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="read-more"
                className="btn btn-primary"
                style={{ maxWidth: "100%" }}
              >
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}