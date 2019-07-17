import React from "react";

const allCards = [
  {
    id:1,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "7 días de playa",
  },
  {
    id:2,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "10 días de shopping",
  },
  {
    id:3,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "15 días tour",
  },
  {
    id:4,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "19 días full",
  },
  {
    id:5,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "7 días de playa",
  },
  {
    id:6,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "10 días de shopping",
  },
  {
    id:7,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "15 días tour",
  },
  {
    id:8,
    price:26.119,
    imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    link: "http://www.hugoromero.com.ar/avantrip/",
    scale: '',
    stayId: '',
    description: "19 días full",
  }
]

    const CardView = ({ match }) => {

    const CardActual = allCards.filter(c=> c.id === parseInt(match.params.id))[0] 
    
    return(
        <div className="Container">
        <br/>
        <p>description: { CardActual.description }</p>
        <br/>
            { 
                CardActual ? ( 
                <React.Fragment>
                    <img src={ CardActual.imgUrl } data-precio={ CardActual.price } /> 
                    <p>id: { CardActual.id }</p>
                    <br/><br/>
                    <h2 class="titulo_pag">Viaja por <strong>{ CardActual.description }</strong> días desde <strong>$ { CardActual.price } </strong></h2>
                </React.Fragment>
                ) : 
                    <h1>El viaje no existe</h1>
            }
        </div>
        )
    }

export default CardView;