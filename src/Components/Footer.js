// import { Button } from "bootstrap";
import './Styles/footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="https://www.iitk.ac.in/">IIT Kanpur</a></li>
                                <li><a href="https://www.iitk.ac.in/ce/">CE IITK</a></li>
                                <li><a href="/">SOCE IITK</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>For Students</h6>
                            <ul className="footer-links">
                                <li><a href="/">Resumes</a></li>
                                <li><a href="/">CE Courses</a></li>
                                <li><a href="/">Blogs</a></li>
                                <li><a href="/">Merchandises</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Events</h6>
                            <ul className="footer-links">
                                <li><a href="/">Freshers</a></li>
                                <li><a href="/">Fare Well</a></li>
                                <li><a href="/">Colloquium</a></li>
                                <li><a href="/">Open House</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h6>Contact</h6>
                            <p>301, WLE, IIT Kanpur, Kanpur
                                Uttar Pradesh, 208016</p>
                            <ul className="footer-links">
                                <li> <a href="tel:+91 8009117479">Phone no.: +91 8009117479</a> </li>
                                <li><a href="mailto:soce@iitk.ac.in">Email: soce@iitk.ac.in</a></li>
                            </ul>           
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12 my-3">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="/"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <hr className="border  border-1" />
                        <div className="col-md-12 col-sm-6 col-xs-12">
                            <p className="copyright-text text-center">Copyright &copy; 2022-23 All Rights Reserved by
                                <a href="/" id='company'> SoCE-IITK</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}