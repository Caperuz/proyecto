import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, NavLinkProps } from "react-router-dom";
const Menu = () => (
    <div class="menu">
            <ul>
                <li class="todos">
                    <Link to="/Todos" class="btn-menu" data-filter="todos">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Todas las estadias</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </Link>
                </li>
                <li class="siete_dias">
                    <Link to="/Siete_dias" class="btn-menu" data-filter="7_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 7 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </Link>
                </li>
                <li class="diez_dias">
                    <Link to="/Diez_dias" class="btn-menu" data-filter="10_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 10 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </Link>
                </li>
                <li class="quince_dias">
                    <Link to="/Quince_dias" class="btn-menu" data-filter="15_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 15 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </Link>
                </li>
                <li class="diecinueve_dias">
                    <Link to="/Diecinueve_dias" class="btn-menu" data-filter="19_dias">
                        <div class="todos_los_textos"> 
                            <div class="subtitle-textos titulo_viaja">
                                <h6>Viaja por 19 días desde</h6>
                            </div>
                            <div class="subtitle-textos desde_precio">
                                <h6>desde $ 13.467</h6>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
)
export default Menu