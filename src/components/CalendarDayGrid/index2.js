import React from 'react'

import './calendarDayGrid.css'

import CalendarDay from '../CalendarDay'


export default class CalendarDayGrid extends React.Component {
    constructor(props) {
        super(props)

        this.currentMonth = this.props.currentPage.match(/^(\d+)/)[1]
        this.currentYear = this.props.currentPage.match(/-(\d+)$/)[1]

        this.setCalendarEntries = this.setCalendarEntries.bind(this)

        this.calendarEntries = this.setCalendarEntries([[]])

    }

    setCalendarEntries(calendarEntries) {
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
        const firstWeekDay = new Date(this.currentYear, this.currentMonth).getDay()

        for (let i = 0; i < firstWeekDay; i++) {
            calendarEntries[0].push("")
        }
        for (let j = 0; j < daysInMonth; j++) {
            if (j % 7 === 0) {
                calendarEntries.push([])
            }
            calendarEntries[Math.floor((firstWeekDay + j) / 7)].push(j + 1)
        }
        return calendarEntries
    }
    render() {
        return (
            <div id="calendar-day-grid">
                {this.calendarEntries.map((curr, ind) => {
                    return (
                        <div className="calendar-row" key={ind}>
                            {curr.map((day, ind2) => {
                                return (<CalendarDay key={ind + "" + ind2} day={day} calendarPage={this.currentMonth + '-' + this.currentYear} addNote={this.props.addNote} notes={this.props.allNotes.filter((note) =>
                                    note.dayOfMonth == day
                                )} />)
                            })
                            }
                        </div>)
                })
                }
            </div>)
    }

}
