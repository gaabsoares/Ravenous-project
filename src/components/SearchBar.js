import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar() {
    function renderSortedOptions() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortValue = sortByOptions[sortByOption];
            return <li key={sortValue}>{sortByOption}</li>;
        });
    };
    
    return (
        <div className="search-bar">
            <ul className="search-options">
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </ul>
            <div className="user-inputs">
                <input className="input" type="text" placeholder="Search Businesses"></input>
                <input className="input" type="text" placeholder="Where?"></input>
            </div>
            <div className="submit">
                <a>Let's Go</a>
            </div>
        </div>
    );
};

export default SearchBar;