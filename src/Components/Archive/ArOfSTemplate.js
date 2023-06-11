import React from "react";

export default function ArOfflineSessionTemplate(props) {
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
                                            marginBottom: "5px",
                                        }}
                                    >
                                        {d.date}
                                    </span>
                                </div>
                                <div>
                                    <h5 style={{ display: "inline", marginRight: "5px" }}>
                                        Slides:
                                    </h5>
                                    <a
                                        href={d.slides}
                                        style={{
                                            fontSize: "18px",
                                            filter: "blur(0)",
                                            textDecoration: "none",
                                            display: "inline-block",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-block",
                                                transition: "0.3s",
                                                ":hover": {
                                                    transform: "scale(1.1)",
                                                    color: "red",
                                                },
                                            }}
                                            className="click-here"
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = "scale(1.05)";
                                                e.target.style.color = "gray";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = "scale(1)";
                                                e.target.style.color = "black";
                                            }}
                                        >
                                            Click Here
                                        </span>
                                    </a>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

