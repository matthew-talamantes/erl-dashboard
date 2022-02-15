import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { Link } from 'react-router-dom';

const EventPreview = ({ event }) => {

    const getTwelveHr = (time) => {
        const timeList = time.split(':');
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



    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{event['title']}</Popover.Header>
            <Popover.Body>
                <p>{getTwelveHr(event['startTime'])} - {getTwelveHr(event['endTime'])}</p>
                <p>{event['notes']}</p>
            </Popover.Body>
        </Popover>
    );

    const EventOverlay = () => (
        <OverlayTrigger trigger={['hover', 'focus']} placement='auto' overlay={popover}>
            <li className="cal-event ps-1">
                <Link tabIndex="0" to={`/event/${event['slug']}`} role="button" data-bs-trigger="focus">
                    <h5 className="cal-event-title">{event['title']}</h5>
                    <p className="cal-event-time">{getTwelveHr(event['startTime'])} - {getTwelveHr(event['endTime'])}</p>
                </Link>
            </li>
        </OverlayTrigger>
    );

    return (
        <EventOverlay />
    );
};

export default EventPreview;
