const intialState = [];

const notesReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.note];

    case 'EDIT_NOTE':
      return state.map((note) =>
        note.id === action.id ? { ...note, ...action.updates } : note
      );

    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);

    case 'SET_NOTES':
      return action.notes;

    default:
      return state;
  }
};

export default notesReducer;
