import React from 'react';

import { useNavigate, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EmailConfirm = ({ confirm }) => {
    let navigate = useNavigate();
    let emailKey = useParams().confirmKey;

    const [confirmKey, setConfirmKey] = React.useState(emailKey);
    
    const onSubmit = (e) => {
        e.preventDefault();

        if (!confirmKey) {
            alert("Please enter a confirmation key!")
            return;
        }

        confirm(confirmKey);
        navigate("/");
    };

  return (
    <Container>
        <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3' controlId='formEmailConfirm'>
                <Row className='justify-content-md-center'>
                    <Col sm md="4">
                        <Form.Label>Email Confirmation Key</Form.Label>
                        <Form.Control type="text" value={confirmKey} onChange={(e) => setConfirmKey(e.target.value)} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center mt-2'>
                    <Col sm md='4' className='d-flex justify-content-end'>
                        <Button type='submit'>Confirm Email</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    </Container>
  )
};

export default EmailConfirm;