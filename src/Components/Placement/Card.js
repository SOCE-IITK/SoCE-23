export default function Card(props) {
  return (
    <div className="row">
      {props.postulates.map((d) => {
        return (
          <div className="col-lg-3">
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={d.dp} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>{d.name}</h3>
                <h4>{d.work}</h4>
                <p>{d.text.slice(0, 100)}...</p>
                <div className="col card-read-more">
                  <a href={d.link} target="_blank">
                    {" "}
                    <button type="button" className="but">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
