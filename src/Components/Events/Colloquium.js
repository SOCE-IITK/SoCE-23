export default function Colloquium() {
  return (
    <div className="container" id="colloquium">
      <div className="row fre">
        <div className="col">
          <h3>Seminars</h3>
          <p>
            We organize seminars to create awareness on various topics. Topics
            are selected to ensure significance to the target audience. The
            seminars provide a platform for individuals to learn and gain new
            insights into different areas of interest.
          </p>
          <dv className="col-3">
            <button type="button" class="event-btn">
              Read more
            </button>
          </dv>
        </div>
      </div>
      <div className="row far">
        <div className="col">
          <h3>Worshops</h3>
          <p>
            Workshops on software and technologies are organized to provide
            information about their use and benefits. These workshops are aimed
            at individuals who want to learn about the latest advancements in
            technology and gain practical skills.
          </p>
          <dv className="col-3">
            <button type="button" class="event-btn">
              Read more
            </button>
          </dv>
        </div>
      </div>
    </div>
  );
}
