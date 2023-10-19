// import { PropaneSharp } from "@mui/icons-material";

function Template(props) {
    return (
        <>
            <div className="container Container" id="summer">
                {/* <div className="row"> */}
                    <div className="stud-flex row d-flex justify-content-around">
                        {props.props.map((d) => {
                            return (
                                <div className="col-md-3 stud">
                                    <h3>{d.head}</h3>
                                    <p>
                                        {d.text}
                                    </p>
                                    <div className="row">

                                        <a href={d.link} target="_blank"><button type="button" className="btn Btn">Read more</button></a>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                {/* </div> */}
            </div>
        </>
    );
}

export default Template