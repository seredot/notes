const editingNoteId = (state = '', action) => {
  switch (action.type) {
    case 'EDITING_NOTE_ID':
      return action.id;
    default:
      return state;
  }
}

export default editingNoteId;
