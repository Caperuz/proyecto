import React from 'react';
import Banner from './Banner';
import Button from './btn_estadias_viaja';
import Menunav from './Menunav';
import Componentecontact from './componente_contacts';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './style.scss';
const App = () => (
  
  <Router>
  <div className="App">
    <Menunav/>
    <Banner/>
    <Button/>
      <div className="galeria">
        <Switch>
          <Route exact path="/" component={ Componentecontact } />
          <Route exact path="/viaja/:customId" component={ Componentecontact } />
          <Route component={() =>(
            <div className="error">
              <h2 class="titulo_pag">El vuelo no existe</h2>
            </div>
          )} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
