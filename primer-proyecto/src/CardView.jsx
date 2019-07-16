import React from "react";
import PropTypes from 'prop-types';

const cards_todos = [
  {
    "id": 1,
    "dias": "7 días de playa",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    "title": "7_dias",
    "precio": 26.119
  },
  {
    "id": 2,
    "dias": "10 días de shopping",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    "title": "10_dias",
    "precio": 32.413
  },
  {
    "id": 3,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
  },
  {
    "id": 4,
    "dias": "19 días full",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    "title": "19_dias",
    "precio": 50.413
  },
  {
    "id": 5,
    "dias": "7 días de playa",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    "title": "7_dias",
    "precio": 26.119
  },
  {
    "id": 6,
    "dias": "10 días de shopping",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    "title": "10_dias",
    "precio": 32.413
  },
  {
    "id": 7,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
  },
  {
    "id": 8,
    "dias": "19 días full",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    "title": "19_dias",
    "precio": 50.413
  }
]

const CardView = ({ match }) => {

    const CardActual = cards_todos.filter(c=> c.id === parseInt(match.params.id))[0] //Esto me devuelve un array
    // En mi constante CardActual voy a guardar la posición 0 de este array nuevo que se filtre
    // En curso actual va a estar ese objeto, en vez de imprimir curso

    
    return(
        <div className="Container">
            { 
                CardActual ? ( 
                <React.Fragment>
                    <img src={ CardActual.image } data-precio={ CardActual.precio } alt={ CardActual.title } /> 
                    <p>id: { CardActual.id }</p>
                    <br/><br/>
                    <h2 class="titulo_pag">Viaja por <strong>{ CardActual.dias }</strong> días desde <strong>$ { CardActual.precio } </strong></h2>
                </React.Fragment>
                ) : 
                    <h1>El viaje no existe</h1>
            }
        </div>
        )

    }

export default CardView;