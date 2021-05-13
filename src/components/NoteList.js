import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotes } from '../actions/notesActions';

import NoteItem from './NoteItem';

export default function NoteList() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes());
    console.log('Inside USE-EFFECT');
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
