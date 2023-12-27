import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

function BusinessList({ businesses }) {
    return (
        <div className="business-list">
            {businesses.map((business, index) => {
                return <Business business={business} key={index} />;
            })}
        </div>
    );
};

export default BusinessList;