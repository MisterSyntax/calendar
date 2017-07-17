/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const setPage = (newPage) => {
    return {
        type: C.SET_PAGE,
        payload: newPage
    }
}

export const setToday = () => {
    let today = new Date
    return {
        type: C.DISABLE,
        payload: today.getMonth()+1 + "-" + today.getDate() + '-' + today.getFullYear()
    }
}

export const addNote = ({dayOfMonth, calendarPage, note}) => {
    const timeStamp = new Date
    let id = timeStamp.getTime()
    return {
        type: C.ADD_NOTE,
        payload: {
            dayOfMonth,
            calendarPage,
            note,
            id
        }
    }
} 

export const removeNote = (noteId) => {

}