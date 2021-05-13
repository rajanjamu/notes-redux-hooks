export const getCurrNote = (state) => {
  return state.notes.find((note) => note.id === state.currId);
};

export const getNotes = (state) => {
  return state.notes;
};
