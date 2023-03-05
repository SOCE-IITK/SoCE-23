export default function Message() {
  return (
    <div className="container">
      <div className="container" id="message">
        <div className="row my-2" data-aos="fade-right">
          <h1>Recent Messages</h1>
        </div>
        <div className="row mes" data-aos="fade-up">
          <div className="col">
            <h6><i>Intended for Y19 Students only</i></h6>
            <p>
            Please provide your final SPO placement and Intern(Optional) resumes. 
This will be helpful for the junior batches to prepare a good resume of thier preferable profile.

            </p>
            <div className="col-sm-8.2">
            <a href="https://forms.gle/FS7ycBFsQtGkcEUD6" target="_blank"><button type="button" className="mybtn Btn btn">Click here to fill the google form</button></a>
          </div>
          </div>
        </div>
        <div className="row my-5 getm" data-aos="zoom-in">
          <div className="col-sm-9">
            <h5>Get in touch with any questions, ideas, or feedback you may have.</h5>
          </div>
          <div className="col-sm-3">
            <a href="./Team/Contact" target="_blank"><button type="button" className="mybtn btn Btn">Contact</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

