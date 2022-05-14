import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NewPet = () => {

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("");
    const [petSkillTwo, setPetSkillTwo] = useState("");
    const [petSkillThree, setPetSkillThree] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets",
        {
            petName,
            petType,
            petDescription,
            petSkillOne,
            petSkillTwo,
            petSkillThree,
        })
        .then((response) => {
            console.log(response.data);
            navigate("/");
        }).catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    };

    return (
        <Container>
            <Row>
                <Col lg={6} className="mx-auto my-2 text-start">
                    <h1 >Pet Shelter</h1>
                </Col>
                <Col lg={3}>
                    <p className="my-2 px-2 text-start">
                        <Link to={"/pets"}>Home</Link>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className="mx-auto my-2 text-start">
                    <h3>Know a pet needing a home?</h3>
                </Col>
            </Row>
            <Row>
            <Col lg={9} className="mx-auto my-3">
            <Form className="bg-dark rounded-3 p-3 text-light" onSubmit={onSubmitHandler}>
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
                <p className="text-primary fs-4">Skills (optional):</p>
                <Row>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formSkillOne">
                    <Form.Label className="text-primary fs-5">Skill 1</Form.Label>
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
                    <Form.Label className="text-primary fs-5">Skill 2</Form.Label>
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
                    <Form.Label className="text-primary fs-5">Skill 3</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPetSkillThree(e.target.value)}
                        name="petSkillThree"
                        value={petSkillThree}
                    />
                </Form.Group>
                </Col>
                </Row>
                <Button type="submit">Add Pet</Button>
            </Form>
            </Col>
            </Row>
        </Container>
    )

}

export default NewPet;