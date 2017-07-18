import React from 'react'
import './calendarHeader.css'

const CalendarHeader = (props) => {

    let month = props.currentPage.match(/^(\d+)/)[1]
    let year = props.currentPage.match(/-(\d+)$/)[1]

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    return (
        <div id="calendar-header">

            <div className="calendar-title"> {monthName[month]} {year} </div>
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