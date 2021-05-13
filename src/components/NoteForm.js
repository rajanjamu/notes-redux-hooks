import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNote, editNote, setCurrId } from '../actions/notesActions';
import { getCurrNote, getNotes } from '../selectors/noteSelectors';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const currNote = useSelector(getCurrNote);
  const notes = useSelector(getNotes);
  const dispatch = useDispatch();

  const handleAddEdit = (e) => {
    e.preventDefault();

    if (!title) {
      return setError('Title cannot be blank!');
    }

    if (currNote) {
      dispatch(editNote(currNote.id, { title, body }));
      dispatch(setCurrId(''));
    } else {
      const isDuplicate = notes.some((note) => note.title === title);
      if (isDuplicate) {
        return setError('Title found duplicate!');
      }
      dispatch(addNote({ id: uuid(), title, body }));
    }

    resetState();
  };

  const handleCancel = () => {
    resetState();
    dispatch(setCurrId(''));
  };

  const resetState = () => {
    setTitle('');
    setBody('');
    setError('');
  };

  useEffect(() => {
    if (currNote) {
      setTitle(currNote.title);
      setBody(currNote.body);
      setError('');
    }
  }, [currNote]);

  return (
    <form onSubmit={handleAddEdit}>
      <h3>{currNote ? 'Edit' : 'Add'} Note</h3>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
