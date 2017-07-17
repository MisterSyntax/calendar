/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

export const todayDate = (state = "", action) => {
    switch (action.type) {
        case C.SET_TODAY : {
            return action.payload
        }
        default:{
            return state
        }   
    }
}

export const currentPage = (state = "", action) => {
    switch (action.type) {
        case C.SET_PAGE: {
            return action.payload
        }
        default:{
            return state
        }            
    }
}

export const notes = (state = [], action) => {
    switch (action.type) {
        case C.ADD_NOTE: {
            return [...state, action.payload]
        }
        case C.REMOVE_NOTE: {
            return state.filter((curr)=>curr.id !== action.payload)
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    todayDate,
    currentPage,
    notes
})