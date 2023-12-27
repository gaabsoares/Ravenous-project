import React from 'react';
import './Business.css';

function Business(props) {
    return(
        <div className="business-container">
            <div className="img-container">
                <img className="business-img" src={props.imageSrc} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <div className="business-info">
                <div className="business-address">
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{props.state} {props.zipCode}</p>
                </div>
                <div className="business-ratings">
                    <h3>{props.category}</h3>
                    <h4>{props.rating} stars</h4>
                    <p>{props.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Business;