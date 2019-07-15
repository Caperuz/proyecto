import React from 'react';
import './App.css';
import './style.css';
import Banner from './Banner'
import Menunav from './Menunav'
import CardsGrid from './CardsGrid'

function App() {
  return (
    <div className="App">
      <Menunav/>
      <Banner/>
      <CardsGrid />
    </div>
  );
}

export default App;
