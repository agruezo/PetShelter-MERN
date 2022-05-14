import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const AllPets = () => {
    
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((response) => {
                console.log(response.data);
                setAllPets(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Container>
            <Row>
                <Col className="text-start">
                    <h1>Pet Shelter</h1>
                </Col>
                <Col className="text-end">
                    <Link to={"/pets/new"}>Add a pet to the shelter</Link>
                </Col>
            </Row>
            <Row className="my-2 text-start">
                <h3>These pets are looking for a good home</h3>
            </Row>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}><Button type="button" className="btn btn-dark mx-1">Details</Button></Link>
                                <Link to={`/pets/edit/${pet._id}`}><Button type="button" className="btn btn-success mx-1">Edit</Button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    )

}

export default AllPets;