// import { PropaneSharp } from "@mui/icons-material";

function Template(props) {
    return (
        <>
            <div className="container">
                <div className="container Container" id="summer">
                    <div className="stud-flex">
                        {props.props.map((d) => {
                            return (
                                <div className="stud">
                                    <h3>{d.head}</h3>
                                    <p>
                                        {d.text}
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                           <a href={d.link} target="_blank"><button type="button" className="btn Btn">Read more</button></a> 
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Template