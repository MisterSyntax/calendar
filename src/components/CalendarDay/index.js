import React from 'react'
import PropTypes from 'prop-types'

import OverlayBox from '../OverlayBox/'

import './calendarDay.css'

export default class CalendarDay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            addingNotes:false,
            viewingNotes:false
        }

        this.toggleAddNote = this.toggleAddNote.bind(this)
    }
    toggleAddNote(currentState){
        console.log('toggle', currentState)
        this.setState({
            addingNotes: !currentState
        })
    }
    render() {
        return (
            <div className={parseInt(this.props.date) ? "calendar-day grid-item" : "calendar-day grid-item inactive-day"}>
                {this.props.date}
                {parseInt(this.props.date) ? <div onClick={()=>this.toggleAddNote(this.state.addingNotes)}>+</div> : <div></div>}
                <OverlayBox open={this.state.addingNotes} closeOverlay={this.toggleAddNote}>
                    Add a note:
                </OverlayBox>
            </div>

        )
    }

}

CalendarDay.defaultProps = {
    date: "X"
}