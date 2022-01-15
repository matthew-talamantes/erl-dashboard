import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddEvent = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formAddEvent'>
                <Form.Label>Event Name</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event Month</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event Day</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event Year</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event Start Time</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event End Time</Form.Label>
                <Form.Control type='text' />
                <Form.Label>Event Notes</Form.Label>
                <Form.Control type='textarea' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    )
};

export default AddEvent;

