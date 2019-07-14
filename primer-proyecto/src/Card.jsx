import React from "react"
import PropTypes from 'prop-types'

const Card = ({image, title, precio }) => (
   
    <div className="box-img">
        <img src={image} data-precio={precio} alt={title}/>
    </div>

)


Card.propTypes = {
dias: PropTypes.string,
image: PropTypes.string,
title: PropTypes.string,
precio: PropTypes.string,
}

Card.defaultProps = {
dias: "No hay dias",
image: "http://www.ninbikes.com/Articulos/uploads/new-1502734805784.jpeg",
title: "Hola mundo",
precio: "Sin costo"
}
// Esto mismo lo explica en el tuto de https://www.youtube.com/watch?v=sOMA7amhGzU
// En ese tuto aparte explica las diferentes maneras de hacer componente segun ES5 ES6
// Esto se hace en un componente que tiene un estado, funciones, etc
// Cuando tiene funcionalidad se utiliza React.Component

export default Card