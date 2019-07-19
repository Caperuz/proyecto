import React from "react";
import { Link } from 'react-router-dom';

const allCards = [
  {
    "description": "7 días playa",
    "scale": "Directo",
    "price": "26119",
    "stayId": 1,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg",
    "id": "cjtk5ac2jf0ev0183sz4k52l6",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "7 días playa básico",
    "scale": "Directo",
    "price": "30000",
    "stayId": 1,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg",
    "id": "cjtk5b5khel0h016737l8k65y",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "7 días playa media pensión",
    "scale": "Directo",
    "price": "40000",
    "stayId": 1,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg",
    "id": "cjtk5bqrkel0l01672zni9f9o",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "7 días playa all inclusive",
    "scale": "Directo",
    "price": "50000",
    "stayId": "1",
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg",
    "id": "cjtk5cbl2el0r016781srt4mi",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "10 días shopping",
    "scale": "Directo",
    "price": "32413",
    "stayId": 2,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg",
    "id": "cjtk5cywmf0fg0183qp2o7tvn",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "10 días shopping básico",
    "scale": "Directo",
    "price": "40000",
    "stayId": 2,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg",
    "id": "cjtk5eb56el150167ct96i0nl",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "10 días shopping media pensión",
    "scale": "Directo",
    "price": "50000",
    "stayId": 2,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg",
    "id": "cjtk5evrlel1e0167brfk27ay",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "10 días shopping all inclusive",
    "scale": "Directo",
    "price": "60000",
    "stayId": 2,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg",
    "id": "cjtk5fm1af0g101833zoouk49",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "15 días tour",
    "scale": "Directo",
    "price": "40000",
    "stayId": 3,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg",
    "id": "cjtk5g42uf0g701834rj385r1",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "15 días tour básico",
    "scale": "Directo",
    "price": "45000",
    "stayId": 3,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg",
    "id": "cjtk5gr3eel1u0167df6lxeh5",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "15 días tour media pensión",
    "scale": "Directo",
    "price": "50000",
    "stayId": 3,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg",
    "id": "cjtk5heamel240167p4x6ox7u",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "15 días tour all inclusive",
    "scale": "Directo",
    "price": "55000",
    "stayId": 3,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg",
    "id": "cjtk5hwdmel2d01677ycnqg2a",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "19 días full",
    "scale": "Directo",
    "price": "50000",
    "stayId": 4,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg",
    "id": "cjtk5hy9af0gr018381c0pnid",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "19 días full básico",
    "scale": "Directo",
    "price": "55000",
    "stayId": 4,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg",
    "id": "cjtk5hzo0f0gv0183yuvwdhh6",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "19 días full media pensión",
    "scale": "Directo",
    "price": "60000",
    "stayId": 4,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg",
    "id": "cjtk5i1f1el2h01673tuux8gq",
    "link": "https://www.avantrip.com"
  },
  {
    "description": "19 días full all inclusive",
    "scale": "Directo",
    "price": "65000",
    "stayId": 4,
    "imgUrl": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg",
    "id": "cjtk5i3gvel2k0167qwcmimo9",
    "link": "https://www.avantrip.com"
  }
]

const CardView = ({ match }) => {

  const CardActual = allCards.filter(c=> c.stayId === parseInt(match.params.stayId))[0] //Esto me devuelve un array

  // const allCardsvar = this.state.allCards.filter (user => user.stayId === '3');

   
  // En mi constante CardActual voy a guardar la posición 0 de este array nuevo que se filtre
  // En curso actual va a estar ese objeto, en vez de imprimir curso
//   const approved = cards_todos.filter(ct => ct.title == '19_dias');

  return(
      <div className="Container">


     
          { 
              CardActual  ? ( 
              <React.Fragment>



              
              
              
                <div className="card_info">
                    <Link to={`/viaja/${CardActual.stayId}`} className="link_box">
                            <div className="top-container">
                                <div className="image-container">
                                    <div className="image-shadow"></div>
                                    <img src={CardActual.imgUrl} data-precio={CardActual.price} alt={CardActual.description} />
                                </div>
                                <div className="data-container">
                                    <div className="subtitle-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="14px" width="14px"><path d="M17.8 21.9l1.6-1.6L17 9.4l4.6-4.6c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L14.6 7 3.7 4.5 2.1 6.2l8.7 4.6-4.6 4.6-2.9-.5L2 16.1l3.8 2.1L7.9 22l1.3-1.3-.5-2.9 4.6-4.6 4.5 8.7z"></path><path d="M12-5l17 17-17 17-17-17L12-5z" fill="none"></path></svg>
                                        <h6 className="heading__heading-h6">{CardActual.scale}</h6>
                                    </div>
                                    <div className="title-container___09e34">
                                        <h2 className="cantidad_dias">{CardActual.description}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="informacion">
                                <article>
                                    <p>Precio desde</p>
                                    <span>ARS</span>
                                    <span>${CardActual.price}</span>
                                </article>
                                <div className="link_ver_vuelo">
                                    <span>Ver vuelo</span>
                                </div>
                            </div>
                        </Link>
                    </div>
              
              
              
              
                  </React.Fragment>
              ) : 
                  <h2>El viaje no existe</h2>
          }
      </div>





        
          













      )
  }

export default CardView