import React from "react";
import Card_siete_dias from './Card_siete_dias';

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
      "precio": 30.119
    }
]

const CardsGridSiete = () => (
    <>
    <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        {
          cards_siete.map (cs => <Card_siete_dias key={cs.id} id={cs.id} dias={cs.dias} image={cs.image} title={cs.title} precio={cs.precio} />)
        }
    </>
)

export default CardsGridSiete