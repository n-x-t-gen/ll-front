import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./Calendar.module.css";

import { INITIAL_EVENTS, createEventId } from "./calendar-utils";

const events = [{ title: "Teste", start: new Date() + "T12:00:00" }];

export default function Calendar() {
  return (
    <main className={styles.main}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        themeSystem="bootstrap"
      />
    </main>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </>
  );
}
