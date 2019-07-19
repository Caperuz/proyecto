import React, { Component } from 'react';
import Card from './Card';





class Componentecontact2 extends Component {
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
        // .then ( respuesta2 => console.log(respuesta2) )  //la consola SI devuelve el array**********
    }
    render(){
       // Si la URL es === customID entonces 
       
        const allCardsvar = this.state.allCards.filter (user => user.stayId === '3');
   //   const allCardsvar = this.state.allCards;
        const renderHome = allCardsvar.map (
            (
            RenderMap => 
            <Card 
                key={RenderMap.id}
                id={RenderMap.id}
                price={RenderMap.price}
                imgUrl={RenderMap.imgUrl}
                link={RenderMap.link}
                scale={RenderMap.scale}
                stayId={RenderMap.stayId}
                description={RenderMap.description}
                />
                 ));
        return (
             <React.Fragment>
                 {renderHome}
             </React.Fragment>
        )
   }
}


   export default Componentecontact2