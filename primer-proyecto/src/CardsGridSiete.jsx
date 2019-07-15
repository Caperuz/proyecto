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
      "precio": 26.119
    }
]

const CardGridSiete = () => (
    <>
        {
          cards_siete.map (c => <Card_siete_dias key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridSiete