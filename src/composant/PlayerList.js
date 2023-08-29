import React from 'react'
import apis from '../Data/players'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import JoueurComponent from './JoueurComponent'
const PlayerList = () => {
  return (
    <> 
<Container>
   <Row>
    {apis.map(({link,Joueur,Numero,Nationalit, Age, Team})=>
    <Col>
    <JoueurComponent
          link={link} 
          Joueur={Joueur}
          Numero={Numero}
          Nationalit={Nationalit}
          Age={Age}
          Team={Team}/>
    </Col>)}
   </Row>
</Container>
         
         </>
  )
}

export default PlayerList