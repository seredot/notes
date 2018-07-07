import uuid from '../utils/uuid';

export const addNote = text => ({
  type: 'ADD_NOTE',
  id: uuid(),
  text: text
})

export const updateNote = (id, text) => ({
  type: 'UPDATE_NOTE',
  id,
  text
})

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id
})

export const editingNoteId = (id) => ({
  type: 'EDITING_NOTE_ID',
  id: id
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const toggleFavoriteNote = id => ({
  type: 'TOGGLE_FAVORITE_NOTE',
  id
})

export const Filters = {
  ALL: 'ALL',
  FAVORITES: 'FAVORITES'
}
