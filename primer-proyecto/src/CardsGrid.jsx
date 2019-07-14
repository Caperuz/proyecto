import React from "react"
import Card from './Card'

const cards = [
    {
        "id": 1,
        "dias": "7 dias",
        "image": "http://www.hugoromero.com.ar/filtros/imagenes/7_dias.png",
        "title": "7_dias",
        "precio": 26.119
      },
      {
        "id": 2,
        "dias": "10 dias",
        "image": "http://www.hugoromero.com.ar/filtros/imagenes/10_dias.png",
        "title": "10_dias",
        "precio": 32.413
      },
      {
        "id": 3,
        "dias": "15 dias",
        "image": "http://www.hugoromero.com.ar/filtros/imagenes/15_dias.png",
        "title": "15_dias",
        "precio": 40.000
      },
      {
        "id": 4,
        "dias": "19 dias",
        "image": "http://www.hugoromero.com.ar/filtros/imagenes/19_dias.png",
        "title": "19_dias",
        "precio": 50.000
      }
]

const CardsGrid = () => (
    <div className="App">
      <div className="galeria">
        {
            //Vamos a hacer un map de cards
            // Me va a retornar el componente Card
            cards.map (c => <Card key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
        </div>
    </div>
)

export default CardsGrid