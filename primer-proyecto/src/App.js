import React from 'react'
import Banner from './Banner'
import Button from './btn_estadias_viaja'
import Menunav from './Menunav'
import Travelcard from './Travelcard'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import './style.scss';
const App = () => (
  
  <Router>
  <main>
    <Menunav/>
    <Banner/>
    <Button/>
    <section>
      <h2 className="titulo_pag">Los vuelos destacados en todas las estadías</h2>
      <Switch>
        <Route exact path="/" component={ Travelcard } />
        <Route exact path="/viaja/:customId" component={ Travelcard } />
        <Route component={() =>( <div className="error"><h2 class="titulo_pag">El vuelo no existe</h2></div> )} />
      </Switch>
    </section>
    </main>
  </Router>
)
export default App;