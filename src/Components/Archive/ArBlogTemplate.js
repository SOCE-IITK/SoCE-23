import React from "react";

export default function ArBlogTemplate(props) {
    return (
        <>
            <div className="container Container" id="summer">
                <div className="stud-flex row d-flex justify-content-around">
                    {props.props.map((d) => {
                        return (
                            <div className="col-md-5 stud">
                                <h2>{d.head}</h2>
                                <div>
                                    <h5 style={{ display: "inline", marginRight: "5px" }}>
                                        Date:
                                    </h5>
                                    <span
                                        style={{
                                            fontSize: "18px",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                            marginBottom: "2px", // Adjust the value as needed
                                        }}
                                    >
                                        {d.date}
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <h5 style={{ display: "inline", marginRight: "5px",marginTop:"5px" }}>
                                        View Here:
                                    </h5>
                                    <ul className="team-social-icons" style={{ marginLeft: "5px" }}>
                                        {d.fb && (
                                            <li>
                                                <a className="facebook" target="_blank" href={d.fb}>
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                        )}
                                        {d.insta && (
                                            <li>
                                                <a className="dribbble" target="_blank" href={d.insta}>
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        )}
                                        {d.linkedin && (
                                            <li>
                                                <a className="linkedin" target="_blank" href={d.linkedin}>
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
