import React from "react";

export default function ArBlogTemplate({ props }) {
  const d = props[0];

  return (
    <div className="col-lg-6 col-md-6 mb-4">

      <div className="student-card archive-card h-100">

        <div className="student-content">

          {/* Badge */}
          <div className="student-badge">
            <i className="fa fa-newspaper-o"></i>
            Blog / Event
          </div>

          {/* Title */}
          <h3>{d.head}</h3>

          {/* Date */}
          <p className="archive-date">
            <i className="fa fa-calendar"></i>
            <span>{d.date}</span>
          </p>

          {/* Social Links */}
          <div className="archive-links">

            {d.fb && (
              <a
                href={d.fb}
                target="_blank"
                rel="noreferrer"
                className="archive-icon"
              >
                <i className="fa fa-facebook"></i>
              </a>
            )}

            {d.insta && (
              <a
                href={d.insta}
                target="_blank"
                rel="noreferrer"
                className="archive-icon"
              >
                <i className="fa fa-instagram"></i>
              </a>
            )}

            {d.linkedin && (
              <a
                href={d.linkedin}
                target="_blank"
                rel="noreferrer"
                className="archive-icon"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}