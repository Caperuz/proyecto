import React from "react"
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, NavLink, NavLinkProps } from "react-router-dom";

const Cardsietedias = ({image, title, precio, dias }) => (
    <>
    <div className="card_info 7_dias">
        <Link to="/Banner" className="link_box">
            <div className="top-container">
                <div className="image-container">
                    <div className="image-shadow"></div>
                    <img src={image} data-precio={precio} alt={title} />
                </div>
                <div className="data-container">
                    <div className="subtitle-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="14px" width="14px"><path d="M17.8 21.9l1.6-1.6L17 9.4l4.6-4.6c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L14.6 7 3.7 4.5 2.1 6.2l8.7 4.6-4.6 4.6-2.9-.5L2 16.1l3.8 2.1L7.9 22l1.3-1.3-.5-2.9 4.6-4.6 4.5 8.7z"></path><path d="M12-5l17 17-17 17-17-17L12-5z" fill="none"></path></svg>
                        <h6 className="heading__heading-h6">Directo</h6>
                    </div>
                    <div className="title-container___09e34">
                        <h2 className="cantidad_dias">{dias}</h2>
                    </div>
                </div>
            </div>
            <div className="informacion">
                <article>
                    <p>Precio desde</p>
                    <span>ARS</span>
                    <span>{precio}</span>
                </article>
                <div className="link_ver_vuelo">
                    <span>Ver vuelo</span>
                </div>
            </div>
        </Link>
    </div>
    </>
)

Cardsietedias.propTypes = {
dias: PropTypes.string,
image: PropTypes.string,
title: PropTypes.string,
precio: PropTypes.string,
}

Cardsietedias.defaultProps = {
dias: "No hay dias",
image: "",
title: "Hola mundo",
precio: "Sin costo"
}

export default Cardsietedias