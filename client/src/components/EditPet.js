import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EditPet = () => {

    const { id } = useParams();
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("");
    const [petSkillTwo, setPetSkillTwo] = useState("");
    const [petSkillThree, setPetSkillThree] = useState("");

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)

            .then((response) => {
                console.log(response.data);
                setPetName(response.data.petName);
                setPetType(response.data.petType);
                setPetDescription(response.data.petDescription);
                setPetSkillOne(response.data.petSkillOne);
                setPetSkillTwo(response.data.petSkillTwo);
                setPetSkillThree(response.data.petSkillThree);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id, navigate]);

    const onUpdateHandler = (e) => {
        e.preventDefault();
        const putUpdateData = {
            petName,
            petType,
            petDescription,
            petSkillOne,
            petSkillTwo,
            petSkillThree,
        }
        axios.put(`http://localhost:8000/api/pets/${id}`, putUpdateData)
            .then((response) => {
                console.log(response.data);
                navigate(`/pets/${response.data._id}`);
            }).catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <Container>
            <Row>
                <Col lg={6} className="mx-auto my-2 text-start">
                    <h1>Pet Shelter</h1>
                </Col>
                <Col lg={3}>
                    <p className="my-2 px-2 text-start">
                        <Link to={"/pets"}>Home</Link>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className="mx-auto my-2 text-start">
                    <h3 className="my-2">Edit {petName}</h3>
                </Col>
            </Row>
            
            <Col lg={9} className="mx-auto my-3">
            <Form className="bg-dark rounded-3 p-3 text-light" onSubmit={onUpdateHandler}>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formName">
                    <Form.Label className="text-primary fs-4">Pet name</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetName(e.target.value)}
                        name="petName"
                        value={petName}
                    />
                    {errors.petName ? <span>{errors.petName.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formType">
                    <Form.Label className="text-primary fs-4">Pet type</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetType(e.target.value)}
                        name="petType"
                        value={petType}
                    />
                    {errors.petType ? <span>{errors.petType.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={6} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formDescription">
                    <Form.Label className="text-primary fs-4">Pet description</Form.Label>
                    <Form.Control 
                        as="textarea"
                        style={{height: '4rem'}}
                        onChange={(e) => setPetDescription(e.target.value)}
                        name="petDescription"
                        value={petDescription}
                    />
                    {errors.petDescription ? <span>{errors.petDescription.message}</span> : null}
                </Form.Group>
                </Col>
                <Button type="submit">Update Pet</Button>
                <Row>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formSkillOne">
                    <Form.Label className="text-primary fs-4">Skill One</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetSkillOne(e.target.value)}
                        name="petSkillOne"
                        value={petSkillOne}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formSkillTwo">
                    <Form.Label className="text-primary fs-4">Skill Two</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetSkillTwo(e.target.value)}
                        name="petSkillTwo"
                        value={petSkillTwo}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formSkillThree">
                    <Form.Label className="text-primary fs-4">Skill Three</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetSkillThree(e.target.value)}
                        name="petSkillThree"
                        value={petSkillThree}
                    />
                </Form.Group>
                </Col>
                </Row>
            </Form>
            </Col>
        </Container>
    )

}

export default EditPet;