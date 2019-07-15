import React from 'react';
import Menu from './Menu'
import Banner from './Banner';
import Menunav from './Menunav';
import CardsGrid from './CardsGrid'
import CardsGridSiete from './CardsGridSiete';
import CardsGridDiez from './CardsGridDiez';
import CardsGridQuince from './CardsGridQuince';
import Diecinueve from './Diecinueve';
import { BrowserRouter as Router, Route, Link, NavLink, NavLinkProps } from "react-router-dom";
import './style.css';

const App = () => (
  <Router>
    <Menunav/>
    <Banner/>
    <Menu/>
    <div className="App">
      <div className="galeria">
        <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        <Route path="/Todos" component={ CardsGrid } />
        <Route path="/Siete_dias" component={ CardsGridSiete } />
        <Route path="/Diez_dias" component={ CardsGridDiez } />
        <Route path="/Quince_dias" component={ CardsGridQuince } />
        <Route path="/Diecinueve_dias" component={ Diecinueve } />
      </div>
    </div>
  </Router>
)

export default App;
