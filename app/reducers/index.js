import { combineReducers } from 'redux'
import notes from './notes'
import filter from './filter'
import editingNoteId from './editingNoteId'

export default combineReducers({
  notes,
  filter,
  editingNoteId
})
