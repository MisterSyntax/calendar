import React from 'react'

import './calendarDayGrid.css'

import CalendarDay from '../CalendarDay'


const CalendarDayGrid = (props) => {

    const currentMonth = props.currentPage.match(/^(\d+)/)[1]
    const currentYear = props.currentPage.match(/-(\d+)$/)[1]
    const daysInMonth = new Date(currentYear, parseInt(currentMonth) + 1, 0).getDate()
    const firstWeekDay = new Date(currentYear, currentMonth).getDay()

    const today = new Date()

    const populateCalendarArray = (calendarEntries) => {
        
        //add blank days to beginning
        for (let i = 0; i < firstWeekDay; i++) {
            calendarEntries[0].push("")
        }
        //add actual days
        for (let j = 0; j < daysInMonth; j++) {
            if (j % 7 === 0) {
                calendarEntries.push([])
            }
            calendarEntries[Math.floor((firstWeekDay + j) / 7)].push(j + 1)
        }

        //Fill the rest of the days with blank days
        if (calendarEntries[calendarEntries.length - 1].length === 0) {
            calendarEntries.pop()
        }

        while (calendarEntries[calendarEntries.length - 1].length < 7) {
            calendarEntries[calendarEntries.length - 1].push("")
        }

        return calendarEntries
    }

    const calendarEntries = populateCalendarArray([[]])

    return (
        <div id="calendar-day-grid">
            {calendarEntries.map((curr, ind) => {
                return (
                    <div className="calendar-row" key={ind}>
                        {curr.map((day, ind2) => {
                            return (
                                <CalendarDay
                                    key={ind + "" + ind2}
                                    day={day}
                                    calendarPage={currentMonth + '-' + currentYear}
                                    addNote={props.addNote}
                                    notes={props.allNotes.filter((note) => note.dayOfMonth == day)}
                                    today={today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear}
                                />
                            )
                        })
                        }
                    </div>)
            })
            }
        </div>)
}

export default CalendarDayGrid
