import React, { useEffect } from "react";
import team24 from "../../database/team24/team24"; // Import team24
import team23 from "../../database/team23/team23"; // Import team23
import team22 from "../../database/team22/team22";
import team21 from "../../database/team21/team21";
import team20 from "../../database/team20/team20";
import web from "../../database/web";
import { useParams } from "react-router-dom";

export default function Card() {
  const params = useParams();
  console.log("Params:", params);

  useEffect(() => {
    console.log("Team24 Data:", team24);
  }, []);

  let team;
  let head = "Managers";

  switch (params.team) {
    case "team24":
      team = team24;
      break;
    case "team23":
      team = team23;
      break;
    case "team22":
      team = team22;
      break;
    case "team21":
      team = team21;
      break;
    case "team20":
      team = team20;
      break;
    case "webteam":
      team = web;
      head = "Developed By";
      break;
    default:
      team = team24; // Default to team24 if no match
  }

  if (!team) {
    console.error("Team data not found!");
    return null;
  }

  const ha = team[0];
  const cd = team[1];
  const sc = team[2];

  return (
    <>
      <div className="row d-flex justify-content-around">
        {params.team === "team24" && (
          <>
            {ha.map((member, index) => (
              <div key={index} className="col-lg-3 postulates-card">
                <div className="a-box">
                  <div className="img-container">
                    <div className="img-inner">
                      <div className="inner-skew"></div>
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                  <div className="team-container">
                    <h3>{member.name}</h3>
                    <h3>{member.post}</h3>
                    <ul className="team-social-icons">
                      <li>
                        <a
                          className="linkedin"
                          target="_blank"
                          href={member.linkedin}
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          target="_blank"
                          href={member.mail}
                          rel="noreferrer"
                        >
                          <i className="fa fa-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          target="_blank"
                          href={member.website}
                          rel="noreferrer"
                        >
                          <i className="fa fa-globe"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <br />
      <br />
      <h2 className="text-center">{head}</h2>
      <div className="row postulates-card d-flex justify-content-around">
        {cd.map((data, index) => (
          <div key={index} className="col-md-3">
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={data.image} alt={data.name} />
                  </div>
                </div>
              </div>
              <div className="team-container">
                <h3>{data.name}</h3>
                <h3>{data.post}</h3>
                <ul className="team-social-icons">
                  <li>
                    <a
                      className="facebook"
                      target="_blank"
                      href={data.fb}
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble"
                      target="_blank"
                      href={data.insta}
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      target="_blank"
                      href={data.linkedin}
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      target="_blank"
                      href={data.mail}
                      rel="noreferrer"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {params.team === "webteam" ? (
        <>
          <br />
          <br />
          <h4 className="text-center">Other</h4>
          <div className="row postulates-card d-flex justify-content-around">
            {sc &&
              sc.map((data, index) => (
                <div key={index} className="col-lg-3">
                  <div className="a-box">
                    <div className="team-container">
                      <h3>{data.name}</h3>
                      <h3>{data.post}</h3>
                      <ul className="team-social-icons">
                        <li>
                          <a
                            className="facebook"
                            target="_blank"
                            href={data.fb}
                            rel="noreferrer"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dribbble"
                            target="_blank"
                            href={data.insta}
                            rel="noreferrer"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            href={data.linkedin}
                            rel="noreferrer"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter"
                            target="_blank"
                            href={data.mail}
                            rel="noreferrer"
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <br />
          <br />
          <h2 className="text-center">Secretary</h2>
          <div className="row postulates-card d-flex justify-content-around">
            {sc &&
              sc.map((data, index) => (
                <div key={index} className="col-lg-3">
                  <div className="a-box">
                    <div className="img-container">
                      <div className="img-inner">
                        <div
                          className="inner-skew"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        >
                          <img
                            className="secy-img"
                            src={data.image}
                            alt={data.name}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="team-container">
                      <h3>{data.name}</h3>
                      <h3>{data.post}</h3>
                      <ul className="team-social-icons">
                        <li>
                          <a
                            className="facebook"
                            target="_blank"
                            href={data.fb}
                            rel="noreferrer"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dribbble"
                            target="_blank"
                            href={data.insta}
                            rel="noreferrer"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="linkedin"
                            target="_blank"
                            href={data.linkedin}
                            rel="noreferrer"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter"
                            target="_blank"
                            href={data.mail}
                            rel="noreferrer"
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}
