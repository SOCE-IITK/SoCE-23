import Secy from "../../database/secretary.json";

export default function SecyCard() {
  return (
    <div className="postulates-card">
      {Secy.map((data) => {
        return (
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
        );
      })}
    </div>
  );
}
