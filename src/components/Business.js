import React from 'react';
import './Business.css';

export const businessExample = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business(props) {
    return(
        <div className="business-container">
            <div className="img-container">
                <img className="business-img" src={businessExample.imageSrc} alt={businessExample.name} />
            </div>
            <h2>{businessExample.name}</h2>
            <div className="business-info">
                <div className="business-address">
                    <p>{businessExample.address}</p>
                    <p>{businessExample.city}</p>
                    <p>{businessExample.state} {businessExample.zipCode}</p>
                </div>
                <div className="business-ratings">
                    <h3>{businessExample.category}</h3>
                    <h4>{businessExample.rating} stars</h4>
                    <p>{businessExample.reviewCount} reviews</p>
                </div>
            </div>

        </div>
    );
};

export default Business;