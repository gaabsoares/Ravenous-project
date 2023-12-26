import React from 'react';
import { businessExample } from '../App';
import './BusinessList.css';

import Business from './Business';
import { businessList } from '../App';

function BusinessList(props) {
    return (
        <div className="business-list">
            {businessList.map(business => <Business 
            imageSrc={business.imageSrc} 
            name={business.name} 
            address={business.address} 
            city={business.city} 
            state={business.state} 
            zipCode={business.zipCode} 
            category={business.category} 
            rating={business.rating} 
            reviewCount={business.reviewCount} />)}
        </div>
    );
};

export default BusinessList;