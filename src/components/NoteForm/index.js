import React from 'react'
import './NoteForm.css'

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: ""
        }
        this.handleUpdateNote = this.handleUpdateNote.bind(this)
    }
    handleUpdateNote(event) {
        this.setState({
            note: event.target.value
        })
    }
    render() {
        return (
            <div className="add-note-form">
                <textarea value={this.state.value} onChange={this.handleUpdateNote} />
                <div className="button" onClick={() => {
                    this.props.closeOverlay()
                    this.props.addNote({
                        dayOfMonth: this.props.dayOfMonth,
                        calendarPage: this.props.calendarPage,
                        note: this.state.note
                    })
                }}> Add Note </div>
            </div>
        )
    }
}