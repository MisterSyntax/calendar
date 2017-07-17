import React from 'react'
import './calendarHeader.css'

const CalendarHeader = (props) => {
    return (
        <div id="calendar-header">
            Calendar Month : {props.currentPage}
            <div className="calendar-header-days">
                <div className="calendar-header-item">
                    Sunday
                        </div>
                <div className="calendar-header-item">
                    Monday
                        </div>
                <div className="calendar-header-item">
                    Tuesday
                        </div>
                <div className="calendar-header-item">
                    Wednesday
                        </div>
                <div className="calendar-header-item">
                    Thursday
                        </div>
                <div className="calendar-header-item">
                    Friday
                        </div>
                <div className="calendar-header-item">
                    Saturday
                        </div>
            </div>
        </div>
    )
}

export default CalendarHeader