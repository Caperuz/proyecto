import React, { Component } from 'react'
import Card from './Card'

class Travelcard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allCards: []
        }
    }
    componentDidMount() {
        fetch('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: '{ allCards {id,price,imgUrl,link,scale,stayId,description}, allStayDatas{bestPrice,customId,id,label} }'
            }),
        })
        .then(respuesta => respuesta.json())
        .then ( respuesta2 => { this.setState({ allCards: respuesta2.data.allCards }) } )
    }
    render(){
        const allCards = this.state.allCards;
        const renderallCards = allCards.filter (user => user).map ( ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ))
        const renderallCardsuno = allCards.filter (user => user.stayId === '1').map ( ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ))
        const renderallCardsdos = allCards.filter (user => user.stayId === '2').map ( ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ))
        const renderallCardstres = allCards.filter (user => user.stayId === '3').map ( ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ))
        const renderallCardscuatro = allCards.filter (user => user.stayId === '4').map ( ( RenderMap => <Card key={RenderMap.id} id={RenderMap.id} price={RenderMap.price} imgUrl={RenderMap.imgUrl} link={RenderMap.link} scale={RenderMap.scale} stayId={RenderMap.stayId} description={RenderMap.description} /> ))
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
            { window.location.pathname === '/' ? renderallCards : '' }
            { window.location.pathname === '/viaja/0' ? renderallCards : '' }
            { window.location.pathname === '/viaja/1' ? renderallCardsuno : '' }
            { window.location.pathname === '/viaja/2' ? renderallCardsdos : '' }
            { window.location.pathname === '/viaja/3' ? renderallCardstres : '' }
            { window.location.pathname === '/viaja/4' ? renderallCardscuatro : '' }
        </React.Fragment>
        )
   }
}
export default Travelcard