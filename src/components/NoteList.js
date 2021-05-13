import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotes } from '../actions/notesActions';
import { getNotes } from '../selectors/noteSelectors';

import NoteItem from './NoteItem';

export default function NoteList() {
  const notes = useSelector(getNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes());
  }, [dispatch]);

  return (
    <div>
      <h3>Notes</h3>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}
