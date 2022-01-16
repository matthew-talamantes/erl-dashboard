import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddEvent = () => {
    return (
        <Container>
            <Form>
                <Form.Group className='mb-3' controlId='formAddEvent'>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type='text' />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type='date' />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='2'>
                            <Form.Label>Event Start Time</Form.Label>
                            <Form.Control type='time' />
                        </Col>
                        <Col sm md='2'>
                            <Form.Label>Event End Time</Form.Label>
                            <Form.Control type='time' />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Notes</Form.Label>
                            <Form.Control type='textarea' rows={3}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
};

export default AddEvent;

