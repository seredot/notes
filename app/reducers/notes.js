const notes = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        {
          id: action.id,
          favorite: false,
          text: action.text
        },
        ...state // Insert last added to the top
      ];

    case "UPDATE_NOTE":
      let itemIndex = -1;
      // Update the note with id
      let updatedList = state.map((note, index) => {
        if (note.id === action.id) {
          itemIndex = index;
          return { ...note, text: action.text };
        } else return note;
      });
      // Move the updated to the top
      let itemsBefore = itemIndex > 0 ? updatedList.slice(0, itemIndex) : [];
      let itemsAfter = updatedList.slice(itemIndex + 1);
      let sorted = [
        updatedList[itemIndex], // move updated item to the top
        ...itemsBefore, // items before updated item
        ...itemsAfter // items after updated item
      ];
      return sorted;

    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.id);

    case "TOGGLE_FAVORITE_NOTE":
      return state.map(
        note =>
          note.id === action.id ? { ...note, favorite: !note.favorite } : note
      );
    default:
      return state;
  }
};

export default notes;
