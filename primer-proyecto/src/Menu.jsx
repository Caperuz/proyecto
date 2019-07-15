import React from "react"
import { NavLink } from 'react-router-dom';
const Menu = () => (
    <div class="menu">
            <ul>
                <li class="todos">
                    <NavLink to="/" exact activeClassName="activando" data-filter="todos">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Todas las estadias</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li class="siete_dias">
                    <NavLink to="/Siete_dias" activeClassName="activando" data-filter="7_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 7 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li class="diez_dias">
                    <NavLink to="/Diez_dias" activeClassName="activando" data-filter="10_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 10 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li class="quince_dias">
                    <NavLink to="/Quince_dias" activeClassName="activando" data-filter="15_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 15 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li class="diecinueve_dias">
                    <NavLink to="/Diecinueve_dias" activeClassName="activando" data-filter="19_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 19 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
)
export default Menu