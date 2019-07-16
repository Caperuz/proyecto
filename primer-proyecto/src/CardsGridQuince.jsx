import React from "react";
import Card_quince_dias from './Card_quince_dias';

const cards_quince = [
    {
    "id": 1,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
    },
    {
    "id": 2,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
    }
]

const CardGridQuince = () => (
    <>
    <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        {
            cards_quince.map (c => <Card_quince_dias key={c.id} id={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridQuince