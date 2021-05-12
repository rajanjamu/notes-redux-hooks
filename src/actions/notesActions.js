export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note,
});

export const editNote = (id) => ({
  type: 'EDIT_NOTE',
  id,
});

export const removeNote = (id) => ({
  type: 'REMOVE_NOTE',
  id,
});

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes,
});
