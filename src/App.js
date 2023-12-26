import React from 'react';
import './App.css';

import BusinessList from './components/BusinessList';
import SearchBar  from './components/SearchBar';

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

export let businessList = [businessExample, businessExample, businessExample, businessExample, businessExample, businessExample];

function App() {
  return (
    <div className="App">
        <h1 className="header">ravenous</h1>
        <SearchBar />
        <BusinessList />
        <footer></footer>
    </div>
  );
}

export default App;
