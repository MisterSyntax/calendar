import React from 'react'
import PropTypes from 'prop-types'

import './calendarDay.css'

const CalendarDay = (props) => {
    return (
        <div className="calendar-day">
            {props.date}
        </div>

    )
}

CalendarDay.defaultProps = {
    date: "X"
}

export default CalendarDay