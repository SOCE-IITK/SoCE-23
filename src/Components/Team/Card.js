import React from "react";
import { useParams } from "react-router-dom";

import team20 from "../../database/team20/team20";
import team21 from "../../database/team21/team21";
import team22 from "../../database/team22/team22";
import team23 from "../../database/team23/team23";
import team24 from "../../database/team24/team24";
import team25 from "../../database/team25/team25";
import team26 from "../../database/team26/team26";
import web from "../../database/web";

export default function Card() {
  const { team } = useParams();

  let teamData;
  let heading = "Managers";

  switch (team) {
    case "team26":
      teamData = team26;
      break;

    case "team25":
      teamData = team25;
      break;

    case "team24":
      teamData = team24;
      break;

    case "team23":
      teamData = team23;
      break;

    case "team22":
      teamData = team22;
      break;

    case "team21":
      teamData = team21;
      break;

    case "team20":
      teamData = team20;
      break;

    case "webteam":
      teamData = web;
      heading = "Developed By";
      break;

    default:
      teamData = team26;
  }

  const heads = teamData[0];
  const managers = teamData[1];
  const others = teamData[2];

  return (
    <>
      {/* ===========================
            HEADS / ADVISORS
      =========================== */}

      {heads && heads.length > 0 && (
        <div className="team-section">

          <div className="team-grid heads-grid">

            {heads.map((member, index) => (

              <div className="team-card-modern" key={index}>

                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

                <h3>{member.name}</h3>

                <span>{member.post}</span>

                <div className="team-icons">

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  )}

                  {member.mail && (
                    <a
                      href={member.mail}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  )}

                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      <h2 className="team-heading">{heading}</h2>

      {/* ===========================
              MANAGERS
      =========================== */}

      <div className="team-grid">

        {managers.map((member, index) => (

          <div className="team-card-modern" key={index}>

            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />

            <h3>{member.name}</h3>

            <span>{member.post}</span>

            <div className="team-icons">

              {member.insta && (
                <a
                  href={member.insta}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              )}

              {member.mail && (
                <a
                  href={member.mail}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              )}

            </div>

          </div>

        ))}

      </div>
            {/* ===========================
              OTHER MEMBERS
      =========================== */}

      {others && others.length > 0 && (
        <>
          <h2 className="team-heading">
            {team === "webteam" ? "Other" : ""}
          </h2>

          <div className="team-grid">

            {others.map((member, index) => (

              <div className="team-card-modern" key={index}>

                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                )}

                <h3>{member.name}</h3>

                <span>{member.post}</span>

                <div className="team-icons">

                  {member.fb && (
                    <a
                      href={member.fb}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  )}

                  {member.insta && (
                    <a
                      href={member.insta}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  )}

                  {member.mail && (
                    <a
                      href={member.mail}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  )}

                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                  )}

                </div>

              </div>

            ))}

          </div>
        </>
      )}

    </>
  );
}