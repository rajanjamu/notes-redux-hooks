import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function NoteApp() {
  return (
    <div className="App">
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default NoteApp;
