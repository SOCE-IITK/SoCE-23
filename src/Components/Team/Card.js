import team22 from "../../database/team22/team22";
import team21 from "../../database/team21/team21";
import team20 from "../../database/team20/team20";
import {useParams} from 'react-router-dom'
export default function Card() {
  const params = useParams()
  console.log(params);
  var team = team22; 
  if(params.team === "team22"){
    team = team22;
  }
  else if(params.team === "team21"){
    team = team21;
  }
  else if(params.team === "team20"){
    team = team20;
  }
  const ha = team[0];
  const cd = team[1];
  const sc = team[2];
  return (
    <>
      <div className="row d-flex justify-content-around">
        <div className="col-lg-3 postulates-card">
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew"></div>
              </div>
            </div>
            <div className="team-container">
              <h3>{ha[0].name}</h3>
              <ul className="team-social-icons">
                <li>
                  <a className="facebook" target="_blank" href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" target="_blank" href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" target="_blank" href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" target="_blank" href="/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-3 postulates-card">
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew"></div>
              </div>
            </div>
            <div className="team-container">
              <h3>{ha[0].name}</h3>
              <ul className="team-social-icons">
                <li>
                  <a className="facebook" target="_blank" href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" target="_blank" href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" target="_blank" href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" target="_blank" href="/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="text-center">Coordinators</h2>
      <div className="row postulates-card d-flex justify-content-around">
        {cd.map((data) => {
          return (
            // <div className="row">
            <div className="col-md-3">
              <div className="a-box">
                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img src={data.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-container">
                  <h3>{data.name}</h3>
                  <ul className="team-social-icons">
                    <li>
                      <a className="facebook" target="_blank" href={data.fb}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="dribbble" target="_blank" href={data.insta}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="linkedin"
                        target="_blank"
                        href={data.linkedin}
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" target="_blank" href={data.mail}>
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br></br>
      <br></br>
      <h2 className="text-center">Secretary</h2>
      <div className="row postulates-card d-flex justify-content-around">
        {sc.map((data) => {
          return (
            <div className="col-lg-3">
              <div className="a-box">
                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img className="secy-img" src={data.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-container">
                  <h3>{data.name}</h3>
                  <h3>{data.post}</h3>
                  <ul className="team-social-icons">
                    <li>
                      <a className="facebook" target='_blank' href={data.fb}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="dribbble" target='_blank' href={data.insta}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" target='_blank' href={data.linkedin}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" target='_blank' href={data.mail}>
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
