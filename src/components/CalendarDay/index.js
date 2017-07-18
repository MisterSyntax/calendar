import React from 'react'
import PropTypes from 'prop-types'

import OverlayBox from '../OverlayBox/'
import NoteForm from '../NoteForm/'

import './calendarDay.css'
import PlusIcon from 'react-icons/lib/fa/plus'

export default class CalendarDay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addingNotes: false,
            viewingNotes: false
        }

        this.toggleAddNote = this.toggleAddNote.bind(this)
    }
    toggleAddNote(currentState) {
        this.setState({
            addingNotes: !currentState
        })
    }
    toggleViewNote(currentState) {
        this.setState({
            viewingNotes: !currentState
        })
    }
    render() {
        return (
            <div className={parseInt(this.props.day) ? "calendar-day grid-item" : "calendar-day grid-item inactive-day"}>
                <div className="day-container">

                    <div className="day-header">

                        <div>{this.props.day}</div>

                        {parseInt(this.props.day) ?
                            <div className="add-note" onClick={() =>
                                this.toggleAddNote(this.state.addingNotes)}><PlusIcon /></div>
                            : <div></div>
                        }
                    </div>


                    {this.props.notes.map(note =>
                        <div key={note.id}>{note.note}</div>
                    )}



                </div>
                <OverlayBox
                    open={this.state.addingNotes}
                    closeOverlay={() => this.toggleAddNote(this.state.addingNotes)}>

                    <NoteForm
                        closeOverlay={() => this.toggleAddNote(this.state.addingNotes)}
                        calendarPage={this.props.calendarPage}
                        dayOfMonth={this.props.day}
                        addNote={this.props.addNote} />

                </OverlayBox>
            </div>

        )
    }

}

CalendarDay.defaultProps = {
    day: "X",
    notes: []
}