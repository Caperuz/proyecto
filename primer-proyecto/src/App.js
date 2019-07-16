import React from 'react';
import Banner from './Banner';
import Menu from './Menu'
import Menunav from './Menunav';

import CardView from './CardView'
import CardViewSiete from './CardViewSiete'



import CardsGrid from './CardsGrid'
import CardsGridSiete from './CardsGridSiete';
import CardsGridDiez from './CardsGridDiez';
import CardsGridQuince from './CardsGridQuince';
import Diecinueve from './Diecinueve';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, NavLinkProps } from "react-router-dom";
import './style.css';

const App = () => (
  <Router>
    <Menunav/>
    <Banner/>
    <Menu/>
    <div className="App">
      <div className="galeria">
        <Switch>
          <Route exact path="/" component={ CardsGrid } />
          




          <Route exact path="/todos/:id" component={ CardView } />
          <Route exact path="/sietedias/:id" component={ CardViewSiete } />
          




          <Route exact path="/Siete_dias" component={ CardsGridSiete } />
          <Route exact path="/Diez_dias" component={ CardsGridDiez } />
          <Route exact path="/Quince_dias" component={ CardsGridQuince } />
          <Route exact path="/Diecinueve_dias" component={ Diecinueve } />
          <Route component={() =>(
            <div className="error">
              <h2 class="titulo_pag">No se han encontrado resultados para su búsqueda</h2>
            </div>
          )} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
