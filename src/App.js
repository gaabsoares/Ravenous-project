import React, { useState } from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar  from './components/SearchBar/SearchBar';
import Yelp from './utils/Yelp';

// export const businessExample = {
//     imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };

// export let businessList = [businessExample, businessExample, businessExample, businessExample, businessExample, businessExample];

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, loc, sort) => {
    try {
      const fetchedBusinesses = await Yelp.search(term, loc, sort);
      console.log('Fetched Businesses:', fetchedBusinesses);
      setBusinesses(fetchedBusinesses || []);
    } catch (error) {
      console.error('Error fetching businesses:', error);
      setBusinesses([]);
    }
  };

  return (
    <div className="App">
        <h1 className="header">ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList  businesses={businesses} />
        <footer></footer>
    </div>
  );
}

export default App;
