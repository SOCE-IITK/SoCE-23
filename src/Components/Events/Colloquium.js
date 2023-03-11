export default function Colloquium() {
  return (
    <div className="container" id="colloquium">
      <div className="row d-flex justify-content-around">
        <div className="col-md-5 fre">
          <div className="row">
            <h3>Seminars</h3>
            <p>
              We organize seminars to create awareness on various topics. Topics
              are selected to ensure significance to the target audience. The
              seminars provide a platform for individuals to learn and gain new
              insights into different areas of interest.
            </p>
            <dv className="row-3">
              <button type="button" class="event-btn">
                Read more
              </button>
            </dv>
          </div>
        </div>
        <div className="col-md-5 far">
          <div className="row">
            <h3>Worshops</h3>
            <p>
              Workshops on software and technologies are organized to provide
              information about their use and benefits. These workshops are aimed
              at individuals who want to learn about the latest advancements in
              technology and gain practical skills.
            </p>
            <dv className="row-3">
              <button type="button" class="event-btn">
                Read more
              </button>
            </dv>
          </div>
        </div>
      </div>
    </div>
  );
}
