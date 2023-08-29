import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const JoueurComponent = (props) => {
    const  link= props.link;
    const  Joueur= props.Joueur;
    const  Team= props.Team;
    const  Numero = props.Numero;
    const  Nationalit = props.Nationalit
    const Age = props.Age;

const myFunction=(props)=>{
    console.log('cliqué',props.Joueur)
    alert(`Vous avez voter pour ${props.Joueur}, Merci`)
}

  return (
    <>
 <Card style={{ width: '20rem', textAlign:'center' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{Joueur}</Card.Title>
          <Card.Text>
         <span><b>Nationalité : </b>{Nationalit}</span><br />
         <span><b>Equipe : </b>{Team} </span>  <br />       
         <span><b>Numero : </b>{Numero}</span> <br />        
         <span><b>Age :</b> {Age}</span>
         </Card.Text>
        <Button  onClick={()=>myFunction(props)} variant="success" style={{marginLeft:"20%"}}>Votez</Button>
      </Card.Body>
    </Card>



    </>
  )
}

export default JoueurComponent