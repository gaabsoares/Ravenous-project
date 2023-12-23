import React from 'react';
import './App.css';

import BusinessList from './components/BusinessList';
import SearchBar  from './components/SearchBar';

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
