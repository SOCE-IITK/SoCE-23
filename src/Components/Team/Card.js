import React, { useEffect } from "react";
import team24 from "../../database/team24/team24";
import team23 from "../../database/team23/team23";
import team22 from "../../database/team22/team22";
import team21 from "../../database/team21/team21";
import team20 from "../../database/team20/team20";
import team25 from "../../database/team25/team25";
import team26 from "../../database/team26/team26";

import web from "../../database/web";
import { useParams } from "react-router-dom";

export default function Card() {
  const params = useParams();
  console.log("Params:", params);

  useEffect(() => {
    console.log("Team Data:", team25); // You can change this based on testing
  }, []);

  let team;
  let head = "Managers";

  switch (params.team) {
    case "team26":
      team = team26;
      break;
    case "team25":
      team = team25;
      break;
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
      team = team25;
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
      {/* Heads / Advisors Section */}
      {ha && ha.length > 0 && (
        <>
          <div className="row d-flex justify-content-around">
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
                        <a className="linkedin" target="_blank" href={member.linkedin} rel="noreferrer">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" target="_blank" href={member.mail} rel="noreferrer">
                          <i className="fa fa-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" target="_blank" href={member.website} rel="noreferrer">
                          <i className="fa fa-globe"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </>
      )}

      {/* Core Developers / Managers */}
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
                    <a className="facebook" target="_blank" href={data.fb} rel="noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" target="_blank" href={data.insta} rel="noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" target="_blank" href={data.linkedin} rel="noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" target="_blank" href={data.mail} rel="noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secretary / Other */}
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
                          <a className="facebook" target="_blank" href={data.fb} rel="noreferrer">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="dribbble" target="_blank" href={data.insta} rel="noreferrer">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" target="_blank" href={data.linkedin} rel="noreferrer">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" target="_blank" href={data.mail} rel="noreferrer">
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
          <h2 className="text-center"></h2>
          <div className="row postulates-card d-flex justify-content-around">
            {sc &&
              sc.map((data, index) => (
                <div key={index} className="col-lg-3">
                  <div className="a-box">
                    <div className="img-container">
                      <div className="img-inner">
                        <div className="inner-skew">
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
                          <a className="facebook" target="_blank" href={data.fb} rel="noreferrer">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="dribbble" target="_blank" href={data.insta} rel="noreferrer">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" target="_blank" href={data.linkedin} rel="noreferrer">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" target="_blank" href={data.mail} rel="noreferrer">
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
