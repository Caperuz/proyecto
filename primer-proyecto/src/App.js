import React from 'react'
import Banner from './Banner'
import Button from './MenuUl'
import Menunav from './Menunav'
import Travel from './Travelcard'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import './style.scss';
const App = () => (
  <Router>
      <Menunav/>
      <Banner/>
      <Button/>
      <section>
        <Switch>
          <Route exact path="/" component={ Travel } />
          <Route exact path="/viaja/:customId" component={ Travel } />
          <Route component={() =>( <div className="error"><h2 class="titulo_pag">El vuelo no existe</h2></div> )} />
        </Switch>
      </section>
  </Router>
)
export default App;