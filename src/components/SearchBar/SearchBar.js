import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLoc, setSearchLoc] = useState('');
    const [sort, setSort] = useState('best_match');

    const sortByClass = (sortOption) => {
        return sort === sortOption ? 'active' : '';
    };

    const handleSortChange = (sortOption) => {
        setSort(sortOption);
    };

    const handleSearchTerm = ({target}) => {
        setSearchTerm(target.value);
    };

    const handleSearchLoc = ({target}) => {
        setSearchLoc(target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(searchTerm, searchLoc, sort);
    };

    function renderSortedOptions() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortValue = sortByOptions[sortByOption];
            return (<li 
            className={sortByClass(sortValue)}
            key={sortValue}
            onClick={() => {
                handleSortChange(sortValue);
            }}>{sortByOption}</li>);
        });
    };
    
    return (
        <div className="search-bar">
            <ul className="search-options">
                {renderSortedOptions()}
            </ul>
            <form onSubmit={handleSearch}>
                <div className="user-inputs">
                    <input onChange={handleSearchTerm} className="input" type="text" placeholder="Search Businesses"></input>
                    <input onChange={handleSearchLoc} className="input" type="text" placeholder="Where?"></input>
                </div>
                <div className="submit">
                    <button type="submit">Let's Go</button>
                </div>            
            </form>
        </div>
    );
};

export default SearchBar;