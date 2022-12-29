export default function Card() {
    return (

        <div className="col-lg-3 postulates-card">
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            img
                        </div>
                    </div>
                </div>
                <div className="team-container">
                    <h3>Tarun Gupta</h3>
                    <ul className="team-social-icons">
                        <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}