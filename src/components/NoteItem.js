import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNote, setCurrId } from '../actions/notesActions';

export default function NoteItem({ id, title, body }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeNote(id));
  };

  const handleEdit = () => {
    dispatch(setCurrId(id));
  };

  return (
    <div key={id}>
      <p>{`${title} - ${body}`}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
