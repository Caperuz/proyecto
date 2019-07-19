import React from "react"
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Menu = ({bestPrice, customId, label, id }) => (
    <>
        <li className={customId}>
            <NavLink to={`/viaja/${customId}`} exact activeClassName="activando" data-filter="todos">
                <div className="todos_los_textos"> 
                    <div className="subtitle-textos titulo_viaja">
                        <h6>{label}</h6>
                    </div>
                    <div className="subtitle-textos desde_precio">
                        <h6>desde $ {bestPrice}</h6>
                    </div>
                </div>
            </NavLink>
        </li>
    </>
)

Menu.propTypes = {
    bestPrice: PropTypes.string,
    customId: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
}

Menu.defaultProps = {
    bestPrice: "No hay dias",
    customId: "",
    id: "Sin costo",
    label: "",
}

export default Menu