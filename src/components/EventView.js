import React from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventView = ({ url, convertEvent }) => {
    const [loading, setLoading] = React.useState(true);
    const [event, setEvent] = React.useState({});
    const [error, setError] = React.useState(null);

    const params = useParams();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const convertToTwelve = (milTime) => {
        const timeList = milTime.split(':');
        const milHour = timeList[0];
        const minutes = timeList[1];
        let suffix = '';
        let hour = 0;
        if (milHour < 12) {
            suffix = 'AM';
            if (milHour === 0) {
                hour = 12;
            } else {
                hour = milHour;
            }
        } else {
            suffix = 'PM';
            if (milHour === 12) {
                hour = milHour;
            } else {
                hour = milHour - 12;
            }
        }

        return `${hour}:${minutes}${suffix}`;
    };

    React.useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`${url}/events/${params.slug}`);
            const jsonData = await res.json();
            const data = convertEvent(jsonData);

            setEvent(data);
            setLoading(false);
        };

        fetchTask();
    }, []);


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
                    <h2>{`${months[event.month]} ${event.day}, ${event.year}`}</h2>
                    <h3>{`${convertToTwelve(event.startTime)}-${convertToTwelve(event.endTime)}`}</h3>
                    <p>{event.notes}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default EventView;
