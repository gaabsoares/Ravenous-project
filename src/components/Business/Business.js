    import React from 'react';
    import './Business.css';

    function Business({ business }) {
        return(
            <div className="business-container">
                <div className="img-container">
                    <img className="business-img" src={business.imageSrc} alt={business.name} />
                </div>
                <h2>{business.name}</h2>
                <div className="business-info">
                    <div className="business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="business-ratings">
                        <h3>{business.category}</h3>
                        <h4>{business.rating} stars</h4>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    };

    export default Business;