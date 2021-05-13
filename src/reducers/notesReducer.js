const intialState = { notes: [], currId: '' };

const notesReducer = (state = intialState, action) => {
  let notes = [];

  switch (action.type) {
    case 'ADD_NOTE':
      notes = [...state.notes, action.note];
      return { ...state, notes };

    case 'EDIT_NOTE':
      notes = state.notes.map((note) =>
        note.id === action.id ? { ...note, ...action.updates } : note
      );
      return { ...state, notes };

    case 'REMOVE_NOTE':
      notes = state.notes.filter(({ id }) => id !== action.id);
      return { ...state, notes };

    case 'SET_NOTES':
      return { ...state, notes: action.notes };

    case 'SET_CURR_ID':
      return { ...state, currId: action.currId };

    default:
      return state;
  }
};

export default notesReducer;
