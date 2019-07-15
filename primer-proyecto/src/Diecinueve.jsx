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
        {
            cards_diecinueve.map (c => <Card_diecinueve_dias key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridDiecinueve