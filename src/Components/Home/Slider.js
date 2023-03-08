import $ from "jquery";
import { content, img } from "../../Data/slider_data";

var a = 0;
function universal(i) {
  $("#y").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][0]).animate({ opacity: 1 }, 200);
  });
  $("#slider-heading").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][1]).animate({ opacity: 1 }, 200);
  });
  $("#slider-date").animate({ opacity: 0 }, 400, function () {
    $(this).html(content[i][2]).animate({ opacity: 1 }, 200);
  });
  // document.getElementById('img').src=img[j];
  $("#img").animate({ opacity: 0 }, 400, function () {
    $(this).attr("src", img[i]).animate({ opacity: 1 }, 300);
  });
  // ********** see later for a tag property
  $("a").attr("href", content[i][3]);
  // console.log('#slider-l')
  let h = document.getElementsByClassName("indicators");
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
export default function Slider() {
  return (
    <div>
      {/* <h1>Recent Activities</h1> */}
      <div className="container slider-parent">
        <div className="row">
          <div className="col">
            <h1 id="recent">Recent Activities</h1>
          </div>
        </div>
        <div className="row slider-row">
          <div className="col-12 slider-content-col">
            <div className="container slider-content">
              <div className="row">
                {/* <div className='col-1 arrow'>
                                    <i id='p' onClick={customp} className="fa fa-angle-left"></i>
                                </div> */}
                <div className="col-lg-4 sl">
                  <img id="img" src={img[0]}></img>
                </div>
                <div className="col-lg-8  sl">
                  <div className="container-fluid">
                    <div className="white">
                      <div className="row ">
                        <div className="col">
                          <h1 id="slider-heading">{content[0][1]}</h1>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col">
                          <h5 id="slider-date">{content[0][2]}</h5>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col">
                          <div id="y">{content[0][0]} </div>{" "}
                        </div>
                      </div>
                      <div className="row readmore">
                        <div className="col">
                          <a href="/">
                            <button id="read-more" className="btn btn-primary">
                              Read More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='col-1 arrow'>
                                    <i id='f' onClick={customf} className="fa fa-angle-right"></i>
                                </div> */}
              </div>
              <div className="row circles">
                <div className="col">
                  <i id="p" onClick={customp} className="fa fa-angle-left"></i>
                  <i className="fa fa-circle indicators" onClick={i1}></i>
                  <i className="fa fa-circle-thin indicators" onClick={i2}></i>
                  <i className="fa fa-circle-thin indicators" onClick={i3}></i>
                  <i id="f" onClick={customf} className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='col-0.5'></div> */}
        </div>
        {/* <div className="row circles">
                    <div className="col">
                        <i id='p' onClick={customp} className="fa fa-angle-left"></i>
                        <i className="fa fa-circle indicators" onClick={i1}></i>
                        <i className="fa fa-circle-thin indicators" onClick={i2}></i>
                        <i className="fa fa-circle-thin indicators" onClick={i3}></i>
                        <i id='f' onClick={customf} className="fa fa-angle-right"></i>
                    </div>
                </div> */}
      </div>
      <div className="row my-4 getm">
        <div className="col-sm-9">
          <h5>
            Get in touch with any questions, ideas, or feedback you may have.
          </h5>
        </div>
        <div className="col-sm-3">
          <a href="/contact-us"><button type="button" className="mybtn Btn btn">
            Contact
          </button></a>
        </div>
      </div>
    </div>
  );
}
