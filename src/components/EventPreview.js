import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const EventPreview = ({ event }) => {

    const getTwelveHr = (time) => {
        const timeList = time.split(':');
        const milHour = timeList[0];
        const minutes = timeList[1];
        let suffix = '';
        
        if (milHour < 12) {
            suffix = 'AM';
        } else {
            suffix = 'PM';
        }

        const hour = ((milHour + 11) % 12 + 1);
        
        return `${hour}:${minutes}${suffix}`;
    };




    // const popoverRef = React.useRef();
    // React.useEffect(() => {
    //     // var popover = new bootstrap.Popover(popoverRef.current, {
    //     //     content: "Hello popover content!",
    //     //     title: "My Popover"
    //     // })
    //     });

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover Header</Popover.Header>
            <Popover.Body>
                This is the popover body!
            </Popover.Body>
        </Popover>
    );

    const EventOverlay = () => (
        <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={popover}>
            <li className="cal-event ps-1">
                <a tabIndex="0" className="" role="button" data-bs-trigger="focus">
                    <h5 className="cal-event-title">{event['title']}</h5>
                    <p className="cal-event-time">{getTwelveHr(event['startTime'])} - {getTwelveHr(event['endTime'])}</p>
                </a>
            </li>
        </OverlayTrigger>
    );

    return (
        <EventOverlay />
    );
};

export default EventPreview;
