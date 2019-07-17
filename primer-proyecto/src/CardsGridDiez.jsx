import React from "react";
import Card from './Card'
import cardsAPI from './api' // Luego uso la api.js que importo... por el momento escribo aca todo el array

class FiltrarDias extends React.Component{
  constructor () {
    super ();
    this.state = {
      name: 'Caperuzitenz',
      cantidaddias: '',
    } // Iniciacion
    
    this.state = {
      allCards : [
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
    }
  }
  render(){

    const variable10dias = this.state.allCards.filter (user => user.description == '10 días de shopping'); //Listo
    const renderDiez = variable10dias.map (
      (
        RenderMap => 
        <Card 
              key={RenderMap.id}
              id={RenderMap.id}
              price={RenderMap.price}
              imgUrl={RenderMap.imgUrl}
              link={RenderMap.link}
              scale={RenderMap.scale}
              stayId={RenderMap.stayId}
              description={RenderMap.description}
            />
      )
      );

    return (
      <React.Fragment>
        {renderDiez}
      </React.Fragment>
    )
  }
}
/////////////// Como resultado:
const CardGridDiez = () => (
  <React.Fragment>
    <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
    <FiltrarDias />
  </React.Fragment>
)
export default CardGridDiez