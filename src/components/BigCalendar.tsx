"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

export default function BigCalendar() {
  const [currentEvents, setCurrentEvents] = useState(calendarEvents);

  const handleEventClick = (clickInfo: { event: { title: string } }) => {
    alert(`Event: ${clickInfo.event.title}`);
  };

  return (
    <div className="dark:bg-slate-700 dark:text-slate-400 p-4 transition-colors duration-300">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={currentEvents}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        timeZone="local"
        slotMinTime="08:00:00" // เวลาที่เริ่มแสดงในแต่ละวัน
        slotMaxTime="17:00:00" // เวลาที่จบแสดงในแต่ละวัน
        height="auto"
      />
    </div>
  );
}
