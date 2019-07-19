import React from 'react';
import Banner from './Banner';
import Button from './btn_estadias_viaja';
import CardView from './CardView';
import Menunav from './Menunav';
import Componentecontact from './componente_contacts';
import Componentecontact1 from './Componentecontact1';
import Componentecontact2 from './Componentecontact2';
import Componentecontact3 from './Componentecontact3';
import Componentecontact4 from './Componentecontact4';
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
          <Route exact path="/"  component={ Componentecontact } />
          <Route exact path="/viaja/0" component={ Componentecontact } />
          <Route exact path="/viaja/1" component={ Componentecontact1 } />
          <Route exact path="/viaja/2" component={ Componentecontact2 } />
          <Route exact path="/viaja/3" component={ Componentecontact3 } />
          <Route exact path="/viaja/4" component={ Componentecontact4 } />
          <Route component={() =>(
            <div className="error">
              <h2 class="titulo_pag">www.avantrip.com</h2>
            </div>
          )} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
