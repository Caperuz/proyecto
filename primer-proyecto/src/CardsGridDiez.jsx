import React from "react";
import Card_diez_dias from './Card_diez_dias';

const cards_diez = [
    {
    "id": 1,
    "dias": "10 días de shopping",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    "title": "10_dias",
    "precio": 32.413
    },
    {
    "id": 2,
    "dias": "10 días de shopping",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
    "title": "10_dias",
    "precio": 34.413
    }
]

const CardGridDiez = () => (
    <>
    <h2 class="titulo_pag">Los vuelos destacados en todas las estadías</h2>
        {
            cards_diez.map (c => <Card_diez_dias key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridDiez