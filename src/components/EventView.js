import React from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventView = ({ url }) => {
    const [loading, setLoading] = React.useState(true);
    const [event, setEvent] = React.useState({});
    const [error, setError] = React.useState(null);

    const params = useParams();

    React.useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`${url}/events/${params.id}`);
            const data = await res.json();

            setEvent(data);
            setLoading(false);
        };

        fetchTask();
    });


  return loading ? (
        <Container>
            <Row>
                <Col>
                    <h1>Loading...</h1>
                </Col>
            </Row>
        </Container>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h1>{event['title']}</h1>
                    <h2>{`${event.month + 1}-${event.day}-${event.year}`}</h2>
                    <h3>{`${event.startTime}-${event.endTime}`}</h3>
                    <p>{event.notes}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default EventView;
