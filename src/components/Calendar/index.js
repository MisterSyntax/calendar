import React from 'react'
import CalendarHeader from '../CalendarHeader/'
import CalendarFooter from '../CalendarFooter'
import CalendarDayGrid from '../CalendarDayGrid/'

import './calendar.css'


export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="calendar-container" >
                <CalendarHeader currentPage={this.props.currentPage}/>
                
                <CalendarDayGrid 
                    currentPage={this.props.currentPage} 
                    addNote={this.props.addNote} 
                    allNotes={this.props.allNotes.filter((note) => 
                        note.calendarPage === this.props.currentPage)} 
                />

                <CalendarFooter 
                    currentPage={this.props.currentPage} 
                    setPage={this.props.setPage} 
                />
                
            </div>
        )

    }
}

Calendar.defaultProps = {
    notes: []
}