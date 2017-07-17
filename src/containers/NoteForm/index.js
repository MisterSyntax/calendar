import NoteForm from '../../components/NoteForm/'

import { connect } from 'react-redux'

import {addNote} from '../../actions'

const mapStateToProps = (state, props) => {
    {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote(note){
            dispatch(
                addNote(note)
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteForm)