import React from 'react'
import CalendarHeader from '../CalendarHeader/'
import CalendarDayGrid from '../CalendarDayGrid/'

export default class Calendar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="calendar-container" >
                <CalendarHeader currentPage={this.props.currentPage} />

                <CalendarDayGrid currentPage={this.props.currentPage}/>
            </div>
        )

    }
}