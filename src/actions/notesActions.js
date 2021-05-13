export const addNoteSync = (note) => ({
  type: 'ADD_NOTE',
  note,
});

export const addNote = (note) => {
  return (dispatch, getState) => {
    const notes = [...getState().notes, note];
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(addNoteSync(note));
  };
};

export const editNoteSync = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
});

export const editNote = (id, updates) => {
  return (dispatch, getState) => {
    const notes = getState().notes.map((note) =>
      note.id === id ? { ...note, ...updates } : note
    );
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(editNoteSync(id, updates));
  };
};

export const removeNoteSync = (id) => ({
  type: 'REMOVE_NOTE',
  id,
});

export const removeNote = (removeId) => {
  return (dispatch, getState) => {
    const notes = getState().notes.filter(({ id }) => id !== removeId);
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(removeNoteSync(removeId));
  };
};

export const setNotesSync = (notes) => ({
  type: 'SET_NOTES',
  notes,
});

export const setNotes = () => {
  return (dispatch, getState) => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(setNotesSync(notes));
  };
};

export const setCurrId = (currId) => ({
  type: 'SET_CURR_ID',
  currId,
});
