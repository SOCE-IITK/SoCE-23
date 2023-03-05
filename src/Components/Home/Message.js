export default function Message() {
  return (
    <div className="container">
      <div className="container" id="message">
        <div className="row my-2" data-aos="fade-right">
          <h1>Recent Messages</h1>
        </div>
        <div className="row mes" data-aos="fade-up">
          <div className="col">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="row my-5 getm" data-aos="zoom-in">
          <div className="col-sm-9">
            <h5>Get in touch with any questions, ideas, or feedback you may have.</h5>
          </div>
          <div className="col-sm-3">
            <button type="button" className="mybtn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

