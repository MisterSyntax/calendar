import React from 'react'
import './App.css'

import Calendar from '../../containers/Calendar/'

export default class App extends React.Component {

    render() {
        return(
            <div id="app">
                <Calendar />
            </div>
        )
    }
}
