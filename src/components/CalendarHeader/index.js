import React from 'react'
import './calendarHeader.css'

const CalendarHeader = (props) => {
    return (
        <div id="calendar-header">
            Welcome to the Calendar
            <div className="calendar-header-days">
                <div className="calendar-header-item grid-item">
                    Sunday
                        </div>
                <div className="calendar-header-item grid-item">
                    Monday
                        </div>
                <div className="calendar-header-item grid-item">
                    Tuesday
                        </div>
                <div className="calendar-header-item grid-item">
                    Wednesday
                        </div>
                <div className="calendar-header-item grid-item">
                    Thursday
                        </div>
                <div className="calendar-header-item grid-item">
                    Friday
                        </div>
                <div className="calendar-header-item grid-item">
                    Saturday
                        </div>
            </div>
        </div>
    )
}

export default CalendarHeader