import React from 'react';
import {businessExample} from './Business';
import './BusinessList.css';

import Business from './Business';

let businessList = [businessExample, businessExample, businessExample, businessExample, businessExample, businessExample]

function BusinessList(props) {
    return (
        <div className="business-list">
            {businessList.map(business => <Business />)}
        </div>
    );
};

export default BusinessList;