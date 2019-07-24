import React from 'react'
import Card from './Card'
import useFetch from './useFetch'
    function Travel() {
        const card = useFetch('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',[])
        return (
            <React.Fragment>
                <h2 className="titulo_pag">
                { window.location.pathname === '/' ? "Los vuelos destacados en todas las estadías" : "" }
                { window.location.pathname === '/viaja/0' ? "Los vuelos destacados en todas las estadías" : "" }
                { window.location.pathname === '/viaja/1' ? "Los vuelos destacados en estadías por 7 días" : "" }
                { window.location.pathname === '/viaja/2' ? "Los vuelos destacados en estadías por 10 días" : "" }
                { window.location.pathname === '/viaja/3' ? "Los vuelos destacados en estadías por 15 días" : "" }
                { window.location.pathname === '/viaja/4' ? "Los vuelos destacados en estadías por 19 días" : "" }
                </h2>
                { window.location.pathname === '/' ? card.data && card.data.allCards.map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ) : '' }
                { window.location.pathname === '/viaja/0' ? card.data.allCards && card.data.allCards.map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> )  : '' }
                { window.location.pathname === '/viaja/1' ? card.data.allCards && card.data.allCards.filter (user => user.stayId === '1').map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ) : '' }
                { window.location.pathname === '/viaja/2' ? card.data.allCards && card.data.allCards.filter (user => user.stayId === '2').map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ) : '' }
                { window.location.pathname === '/viaja/3' ? card.data.allCards && card.data.allCards.filter (user => user.stayId === '3').map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ) : '' }
                { window.location.pathname === '/viaja/4' ? card.data.allCards && card.data.allCards.filter (user => user.stayId === '4').map ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ) : '' }
            </React.Fragment>
        )
}
export default Travel