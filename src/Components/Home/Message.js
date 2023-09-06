import { content } from '../../Data/messages'
import $ from "jquery";
var a = 0;
function universal(i) {

  $("#content").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][0]).animate({ opacity: 1 }, 200);
  });
  $("#open").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][1]).animate({ opacity: 1 }, 200);
  });
  $("#msg-date").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][2]).animate({ opacity: 1 }, 200);
  });
  // ********** see later for a tag property
  $("#msg-link").attr("href", content[i][3]);

  let h = document.getElementsByClassName("Indicators");
  for (var k = 0; k < 2; k++) {
    h[k].classList.remove("fa-circle");
    h[k].classList.add("fa-circle-thin");
  }
  h[i].classList.remove("fa-circle-thin");
  h[i].classList.add("fa-circle");
}
function customf() {
  a++;
  if (a > 1) a = 0;
  universal(a);
}
function customp() {
  a--;
  if (a < 0) a = 1;
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
              <i id='open'>{content[0][1]}</i>
            </h6>
            <p id='content'>
              {content[0][0]}
              {/* <br/> */}
            </p>
            <b id='msg-date'>{content[0][2]}</b>
            <div className="col-sm-8.2">
              <a id='msg-link' href={content[0][3]} target="_blank">
                <button type="button" className="mybtn Btn btn">
                  Read More!
                </button>
              </a>
            </div>
          </div>
          <div className="row circles">
            <div className="col">
              <i id="P" onClick={customp} className="fa fa-angle-left"></i>
              <i className="fa fa-circle Indicators" onClick={i1}></i>
              <i className="fa fa-circle-thin Indicators" onClick={i2}></i>
              {/* <i className="fa fa-circle-thin Indicators" onClick={i3}></i> */}
              <i id="F" onClick={customf} className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
