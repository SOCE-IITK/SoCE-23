
var a = 0;
function universal(i) {
  let h = document.getElementsByClassName("Indicators");
  for (var k = 0; k < 3; k++) {
    h[k].classList.remove("fa-circle");
    h[k].classList.add("fa-circle-thin");
  }
  h[i].classList.remove("fa-circle-thin");
  h[i].classList.add("fa-circle");
}
function customf() {
  a++;
  if (a > 2) a = 0;
  universal(a);
}
function customp() {
  a--;
  if (a < 0) a = 2;
  universal(a);
}
function i1() {
  universal(0);
}
function i2() {
  universal(1);
}
function i3() {
  universal(2);
}

export default function Message() {
  return (
    <div className="container">
      <div className="container" id="message">
        <div className="mess">
          <h1>Recent Messages</h1>
        </div>
        <div className="row mes">
          <div className="col">
            <h6>
              <i>Intended for Y19 Students only</i>
            </h6>
            <p>
              Please provide your final SPO placement and Intern(Optional)
              resumes for the resume database. This will be helpful for the
              junior batches to prepare a good resume of thier preferable
              profile.
            </p>
            <div className="col-sm-8.2">
              <a href="https://forms.gle/FS7ycBFsQtGkcEUD6" target="_blank">
                <button type="button" className="mybtn Btn btn">
                  Click here to fill the google form
                </button>
              </a>
            </div>
          </div>
          <div className="row circles">
            <div className="col">
              <i id="P" onClick={customp} className="fa fa-angle-left"></i>
              <i className="fa fa-circle Indicators" onClick={i1}></i>
              <i className="fa fa-circle-thin Indicators" onClick={i2}></i>
              <i className="fa fa-circle-thin Indicators" onClick={i3}></i>
              <i id="F" onClick={customf} className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
