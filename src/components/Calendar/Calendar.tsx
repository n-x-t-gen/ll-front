import React from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./calendar-utils";
import { Checkbox, FormControlLabel } from "@mui/material";
import ptLocale from "@fullcalendar/core/locales/pt";
import styles from "./Calendar.module.css";

class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
    isDraggableInitialized: false,
  };
  label = { inputProps: { "aria-label": "Ativar/desativar finais de semana" } };

  componentDidMount() {
    this.setupDraggable();
  }

  setupDraggable() {
    if (!this.state.isDraggableInitialized) {
      const containerEl = document.querySelector("#events");

      if (containerEl instanceof HTMLElement) {
        new Draggable(containerEl, {
          itemSelector: ".appointmentToken",
          eventData: (eventEl) => ({
            title: eventEl.innerText,
          }),
        });

        this.setState({ isDraggableInitialized: true });
      }
    }
  }

  render() {
    return (
      <div className="demo-app">
        {this.renderSidebar()}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            locale={ptLocale}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
          />
        </div>
        <ul id="events">
          <li className="appointmentToken">teste 1</li>
          <li className="appointmentToken">teste 2</li>
          <li className="appointmentToken">teste 3</li>
        </ul>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        {/* <div className="demo-app-sidebar-section">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Ativar/desativar final de semana"
            defaultChecked
            checked={this.state.weekendsVisible}
            onChange={this.handleWeekendsToggle}
          />
        </div> */}
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo: any) => {
    let title = prompt("Insira um nome para o evento:");
    let calendarApi = selectInfo.view.calendar;
    console.log(calendarApi);

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventClick = (clickInfo: any) => {
    if (confirm(`Quer mesmo excluir '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events: any) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event: any) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

export default Calendar;

// TODO: verificar o drag duplicado
