import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddEvent = () => {

    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [notes, setNotes] = React.useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
    };

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
                <Row className='justify-content-md-center'>
                    <Col sm md='4' className='d-flex justify-content-end'>
                        <Button type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
};

export default AddEvent;

