import React from 'react'
import './calendarFooter.css'

const CalendFooter = (props) => {
    
    let month = props.currentPage.match(/^(\d+)/)[1]
    let year = props.currentPage.match(/-(\d+)$/)[1]
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    function nextMonth(month, year){

        let newYear = parseInt(month)+1 > 11 ? parseInt(year) + 1 : year
        let newMonth = parseInt(month)+1 > 11 ? 0 : parseInt(month)+1

        return newMonth + '-' + newYear
    }

    function lastMonth(month, year){ 

        let newYear = parseInt(month)-1 < 0 ? parseInt(year) -1 : year
        let newMonth = parseInt(month)-1 < 0 ? 11 : parseInt(month)-1

        return newMonth + '-' + newYear
    }


    return (
        <div id="calendar-header">
            <div id="month-control-bar">
            <div className="button" onClick={()=>props.setPage(lastMonth(month,year))}>Prev</div>
            <div className="button" onClick={()=>props.setPage(nextMonth(month,year))}>Next</div>
            </div>
        </div>
    )
}

export default CalendFooter