/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import Calendar from '../../components/Calendar/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { setPage, setToday, addNote } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        todayDate: state.todayDate,
        currentPage: state.currentPage,
        allNotes: state.notes
    }
)

const mapDispatchToProps = dispatch => {
    return{
        setPage(newPage){
            dispatch(
                setPage(newPage)
            )
        },
        setToday(){
            dispatch(
                setPage()
            )
        },
        addNote(note){
            dispatch(
                addNote(note)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)