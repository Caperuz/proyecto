import React from "react";
import PropTypes from 'prop-types';

const cards_siete = [
  {
    "id": 1,
    "dias": "7 días de playa",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    "title": "7_dias",
    "precio": 26.119
  },
  {
    "id": 2,
    "dias": "7 días de playa",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    "title": "7_dias",
    "precio": 26.119
  }
]

const CardViewSiete = ({ match }) => {

    const CardActualSiete = cards_siete.filter(cs=> cs.id === parseInt(match.params.id))[0] //Esto me devuelve un array
    // En mi constante CardActualSiete voy a guardar la posición 0 de este array nuevo que se filtre
    // En curso actual va a estar ese objeto, en vez de imprimir curso

    
    return(
        <div className="Container">
            { 
                CardActualSiete ? ( 
                <React.Fragment>
                    <img src={ CardActualSiete.image } data-precio={ CardActualSiete.precio } alt={ CardActualSiete.title } /> 
                    <p>id: { CardActualSiete.id }</p>
                    <br/><br/>
                    <h2 class="titulo_pag">Viaja por <strong>{ CardActualSiete.dias }</strong> días desde <strong>$ { CardActualSiete.precio } </strong></h2>
                </React.Fragment>
                ) : 
                    <h1>El viaje no existe</h1>
            }
        </div>
        )

    }

export default CardViewSiete;