import React from "react";
import Card_diecinueve_dias from './Card_diecinueve_dias';

const cards_diecinueve = [
    {
    "id": 1,
    "dias": "19 días full",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    "title": "19_dias",
    "precio": 50.413
    },
    {
    "id": 2,
    "dias": "19 días full",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
    "title": "19_dias",
    "precio": 50.413
    }
]

const CardGridDiecinueve = () => (
    <>
    <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        {
            cards_diecinueve.map (c => <Card_diecinueve_dias key={c.id} id={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridDiecinueve