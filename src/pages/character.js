import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Character() {

    const {character} = useState([
        {
            pet: "Momo",
            imagePath: "Momo",
            type: "Male Cat",
            toy: "Stuffed Chicken"
        },
        {
            pet: "Logan",
            imagePath: "Logan",
            type: "Male Dog",
            toy: ""
        },
        {
            pet: "Alice",
            imagePath: "Alice",
            type: "Female Cat",
            toy: ""
        },
        {
            pet: "River",
            imagePath: "River",
            type: "Dog",
            toy: ""
        },
        {
            pet: "Selena",
            imagePath: "Selena",
            type: "Female Cat",
            toy: ""
        },
        {
            pet: "Slash",
            imagePath: "Slash",
            type: "Male Lizard",
            toy: ""
        }
    
    ])

    return (
    <div>
        <h2>Character Selection</h2>
        {character}.map((Game)) => (
            <Row className="cards">
                    <Col>
                        <Card className="card" style={{ width: '30rem' }} key={character.pet}>
                            <Card.Img className="card-img" style={{ width: '30rem' }} src={require(`../../../assets/pet-illustrations/${character.imagePath}.png`)} alt={project.pet} />
                            <Card.Body className="card-info">
                                <Card.Title className="text-title">{character.pet}</Card.Title>
                                <Card.Text className="card-description">{character.type}</Card.Text>
                                <Card.Text className="card-description">{character.toy}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="startBtn">
                <button>Start Adventure</button>
                </div>
        </div>
)
        };
        export default Character;
