// import { PropaneSharp } from "@mui/icons-material";

function Template(props) {
    return (
        <>
            {/* {console.log(props.props)} */}
            <div className="container">
                <div className="container Container" id="summer">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-4 stud">
                            <h3>{props.props.head1}</h3>
                            <p>
                                {props.props.text1}
                            </p>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn Btn">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4 stud">
                            <h3>{props.props.head2}</h3>
                            <p>
                                {props.props.text2}
                            </p>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn Btn">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template