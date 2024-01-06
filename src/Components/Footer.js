// import { Button } from "bootstrap";
import "./Styles/footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-xs-6 col-md-2">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="https://www.iitk.ac.in/" target="_blank">
                        IIT Kanpur
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iitk.ac.in/ce/" target="_blank">
                        CE IIT Kanpur
                      </a>
                    </li>
                    <li>
                      <li>
                        <a href="/">SoCE IIT Kanpur</a>
                      </li>
                      <a
                        href="https://docs.google.com/document/d/1eZObDFADNHBY2Rz54gBl783c_50Q6yYXPjU-WD4YTWM/edit?usp=sharing"
                        target="_blank"
                      >
                        Important Links
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-xs-6 col-md-2">
                  <h6>Events</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="/">Freshers</a>
                    </li>
                    <li>
                      <a href="/">Farewell</a>
                    </li>
                    <li>
                      <a href="/">Seminar</a>
                    </li>
                    <li>
                      <a href="/">Workshops</a>
                    </li>
                  </ul>
                </div> */}
                <div className="col-xs-6 col-md-2">
                  <h6>For Students</h6>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1BsFrnh5fE0Moi9J_6K9URX5r3N2UdEaa"
                        target="_blank"
                      >
                        Resumes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/civil/geotech/course_structure.pdf"
                        target="_blank"
                      >
                        CE Courses
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/ce/detailed-course-requirements"
                        target="_blank"
                      >
                        CE Pre-Reqs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/ce/data/B._Tech_Template.PDF"
                        target="_blank"
                      >
                        CE Template
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-2">
                  <h6>More Links</h6>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://www.iitk.ac.in/ce/b-tech-program-in-civil-engineering"
                        target="_blank"
                      >
                        CE B.Tech
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/ce/pg-admissions"
                        target="_blank"
                      >
                        CE M.Tech
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/ce/faculty"
                        target="_blank"
                      >
                        CE Faculty
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iitk.ac.in/civil/research-groups"
                        target="_blank"
                      >
                        CE Research
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-2">
                  <h6>SoCE Links</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="/reports" target="_blank">
                        Reports
                      </a>
                    </li>
                    <li>
                      <a href="/archive" target="_blank">
                        Archive
                      </a>
                    </li>
                    <li>
                      <a href="/contact" target="_blank">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/portals" target="_blank">
                        Portals
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3">
              <h6>Contact</h6>
              <p className="footer-p">
                WLE-301, IIT Kanpur, Kalyanpur
                <br />
                Kanpur, Uttar Pradesh, 208016
              </p>
              <ul className="footer-links">
                <li>
                  {" "}
                  <a href="tel:+91 7906379797">
                    Phone no.: +91 7906379797
                  </a>{" "}
                </li>
                <li>
                  <a href="mailto:soce@iitk.ac.in">Email: soce@iitk.ac.in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-6 col-xs-12 my-3" id="footer-icon">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/soce.iitk"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/@societyofcivilengineersiit3172"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/soce.iitk/?hl=en"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/society-of-civil-engineers-iitk/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr className="border border-1" />
            {/* <div className="col-md-12 col-sm-6 col-xs-12">
              <p className="copyright-text text-center footer-c">
                Designed by
                <a href="#" id="company">
                  {" "}
                  Web Team
                </a>
              </p>
            </div> */}
            <div className="col-md-12 col-sm-6 col-xs-12">
              <p className="copyright-text text-center footer-c">
                Copyright &copy; 2022-23{" "}
                <a href="#" id="company">
                  {" "}
                  SoCE, IIT Kanpur
                </a>{" "}
                |
                <a href="/team/webteam" id="company">
                  {" "}
                  Designed by Web Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
