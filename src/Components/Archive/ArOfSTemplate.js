import React from "react";

export default function ArOfflineSessionTemplate({ props }) {
  const d = props[0];

  return (
    <div className="col-lg-6 col-md-6 mb-4">

      <div className="student-card archive-card h-100">

        <div className="student-content">

          {/* Badge */}
          <div className="student-badge">
            <i className="fa fa-file-powerpoint-o"></i>
            Session
          </div>

          {/* Title */}
          <h3>{d.head}</h3>

          {/* Date */}
          <p className="archive-date">
            <i className="fa fa-calendar"></i>
            <span>{d.date}</span>
          </p>

          {/* Button */}
          <a
            href={d.slides}
            target="_blank"
            rel="noreferrer"
            className="read-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <i className="fa fa-external-link"></i>
            View Slides
          </a>

        </div>

      </div>

    </div>
  );
}