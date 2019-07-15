import React from "react"
import Card from './Card'
import Menu from './Menu'

const cards = [
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

const CardsGrid = () => (
    <>
      
      <Menu/>
      <div className="galeria">
        <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        {
            //Vamos a hacer un map de cards
            // Me va a retornar el componente Card
            cards.map (c => <Card key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
        </div>
    </>
)

export default CardsGrid