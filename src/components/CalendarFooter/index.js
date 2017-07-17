import React from 'react'
import './calendarHeader.css'

const CalendarHeader = (props) => {
    console.log(props.currentPage)
    let month = props.currentPage.match(/^(\d+)/)[1]
    let year = props.currentPage.match(/-(\d+)$/)[1]
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
    return (
        <div id="calendar-header">
            <div id="month-control-bar">
            <div className="button" onClick={()=>props.setPage((parseInt(month)-1)+"-"+year)}>Prev</div>
            <div> {monthName[month]} {year} </div>
            <div className="button" onClick={()=>props.setPage((parseInt(month)+1)+"-"+year)}>Next</div>
            </div>
        </div>
    )
}

export default CalendarHeader