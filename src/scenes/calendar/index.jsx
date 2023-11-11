import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { formatDate } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selectInfo) => {
    let eventGuid = 0;
    const title = prompt("please enter a new title for your event");

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: String(eventGuid++),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <Box margin={"20px"}>
      <Header title={"CALENDAR"} subtitle={"Full Calendar Interactive Page"} />
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* CALENDAR ..  */}
        <Box
          flex={"1 1 20%"}
          backgroundColor={"#70d8bd"}
          p={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents?.map((event) => (
              <>
                <ListItem
                  key={event?.id}
                  sx={{ color: "white", margin: "10px 0", borderRadius: "2px" }}
                >
                  <ListItemText
                    primary={event?.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              </>
            ))}
          </List>
        </Box>

        {/* CALENDAR  */}
        <Box flex={"1 1 100%"} ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(event) => setCurrentEvents(event)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2023-11-10" },
              { id: "4321", title: "Timed event", date: "2023-11-12" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
