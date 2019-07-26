import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import useFetch from './useFetch'
import { NavLink } from 'react-router-dom'

function Button() {
    const menus = useFetch('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',[])
    const [toggled, toggle] = useState(false);

    return (
        <React.Fragment>
            <nav className="menu">
                <ul className="amoviles">
                    <div className="appo">
                        {
                            menus.data.allStayDatas && menus.data.allStayDatas.filter (user => user.customId === '0').sort((a, b) => a - b).reverse().map ( Renderallmovil => 
                                <li>
                                    <span className="arrow"><span></span><span></span></span>
                                    <NavLink to={`/viaja/0`} exact onClick={() => toggle(toggled => !toggled)} activeClassName="activando" data-filter="todos">
                                        <div className="todos_los_textos"> 
                                            <div className="subtitle-textos titulo_viaja">
                                                <h6>{Renderallmovil.label}</h6>
                                            </div>
                                            <div className="subtitle-textos desde_precio">
                                                <h6>desde $ {Renderallmovil.bestPrice}</h6>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            )}
                    </div>
                    {
                        toggled &&   
                        menus.data.allStayDatas && menus.data.allStayDatas.filter (user => user.customId > '0').sort((a, b) => a - b).reverse().map ( Renderall => 
                        <Menu key={Renderall.customId} bestPrice={Renderall.bestPrice} customId={Renderall.customId} id={Renderall.id} label={Renderall.label} />
                    )}
                </ul>
                <ul className="desktop">
                    {   
                        menus.data.allStayDatas && menus.data.allStayDatas.filter (user => user).sort((a, b) => a - b).reverse().map ( Renderall => 
                        <Menu key={Renderall.customId} bestPrice={Renderall.bestPrice} customId={Renderall.customId} id={Renderall.id} label={Renderall.label} />
                    )}
                </ul>
            </nav>
        </React.Fragment>
    )
} 
export default Button