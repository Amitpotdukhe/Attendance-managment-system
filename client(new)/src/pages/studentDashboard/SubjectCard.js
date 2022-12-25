import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function SubjectCard() {
    const subjects = [
        { sub: "Big Data Analytics", att: "33%" },
        { sub: "Cloud Computing", att: "40%" },
        { sub: "Software Engineering", att: "33%" },
        { sub: "Machine Learning", att: "33%" },
        { sub: "Software Engineering Lab", att: "33%" },
        { sub: "Blockchain Technology", att: "33%" },
    ];

    return (
        <div>
            {subjects.map((item) => {
                return (
                    <div className="card card-1">
                        <div className="top">
                            <img
                                src="https://s-media-cache-ak0.pinimg.com/originals/97/56/c2/9756c2a05e2dd85309fe4b3bc5d62357.gif"
                                alt="material ui"
                            />
                        </div>
                        <div className="bottom">
                            <p>{item.sub}</p>
                            <p>{item.att}</p>
                        </div>
                        <Link to="analyze-subjects">Analyze</Link>
                    </div>
                );
            })}
        </div>
    );
}
