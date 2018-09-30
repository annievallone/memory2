import React from "react";
import "./pupcard.css";

const PupCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
            </ul>
        </div>
        <span onClick={() => props.removePup(props.id)} className="remove">
            𝘅
    </span>
    </div>
);

export default PupCard;
