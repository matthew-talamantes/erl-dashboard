import React from 'react';

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


    const popoverRef = React.useRef();
    React.useEffect(() => {
        // var popover = new bootstrap.Popover(popoverRef.current, {
        //     content: "Hello popover content!",
        //     title: "My Popover"
        // })
        });



    return (
        <li className="cal-event">
            <a tabIndex="0" ref={popoverRef} className="btn btn-lg btn-danger" role="button" data-bs-trigger="focus">
                <h5 className="cal-event-title">{event['title']}</h5>
                <p className="cal-event-time">{getTwelveHr(event['startTime'])} - {getTwelveHr(event['endTime'])}</p>
            </a>
        </li>
    );
};

export default EventPreview;
