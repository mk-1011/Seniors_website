import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullCalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import bootstrap from "bootstrap";
//import "bootstrap/dist/css/boostrap.min.css";
import "../pages/CSS/calendar.css";

function Calendar(){
    const events = [
        {
            title: "Renewal",
            start: "2023-10-17T08:00:00",
            end: "2023-10-17T23:00:00",
        },
    ];
    return <div>
        <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
            start: "dayGridMonth,timeGridWeek,timeGridDay",
            center: "title",
            end: "today, prev, next",
        }}
        height = {"90vh"}
        events={events}
        eventDidMount={(info)=>{
            return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                trigger: "hover",
                customClass: "popoverStyle",
                content:
                    "<p>Please renew your aadhar card</p>",
                html: true,
            });
        }}
        />
    </div>
}

export default Calendar;