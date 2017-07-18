import React from 'react'
import './NoteForm.css'

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: ""
        }
        this.handleUpdateNote = this.handleUpdateNote.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }
    handleUpdateNote(event) {
        this.setState({
            note: event.target.value
        })
    }
    handleSubmission() {
        this.props.addNote({
            dayOfMonth: this.props.dayOfMonth,
            calendarPage: this.props.calendarPage,
            note: this.state.note
        })
        this.setState({
            note:""
        })
        console.log(this.state.note)
        
        this.props.closeOverlay()
    }
    render() {
        return (
            <div className="add-note-form">
                <div>Note for {this.props.dayOfMonth}-{this.props.calendarPage} </div>
                <textarea value={this.state.note} onChange={this.handleUpdateNote} />

                <div className="button" onClick={this.handleSubmission}> Add Note </div>
            </div>
        )
    }
}