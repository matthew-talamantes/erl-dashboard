import React from 'react';

import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddEvent = ({ onAdd }) => {
    
    let navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);
    

    const updateRedirect = () => {
        setRedirect(true);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Please add a name for the event!');
            return;
        } else if (!date) {
            alert('Please add a date for the event!');
            return;
        } else if (!startTime) {
            alert('Please add a start time for the event!');
            return;
        } else if (!endTime) {
            alert('Please add an end time for the event!')
            return;
        }

        const year = date.slice(0, 4);
        const month = (parseInt(date.slice(5, 7).replace(/^0+/, '')) - 1).toString();
        const day = date.slice(8).replace(/^0+/, '');

        

        onAdd({
            title: name,
            type: 'event',
            year: year,
            month: month,
            day: day,
            startTime: startTime,
            endTime: endTime,
            notes: notes
        });

        setName('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setNotes('');

        navigate('/');
    };


    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='formAddEvent'>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='2'>
                            <Form.Label>Event Start Time</Form.Label>
                            <Form.Control type='time'  value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
                        </Col>
                        <Col sm md='2'>
                            <Form.Label>Event End Time</Form.Label>
                            <Form.Control type='time' value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col sm md='4'>
                            <Form.Label>Event Notes</Form.Label>
                            <Form.Control type='textarea' rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
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

