import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

interface Note {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]') as Note[];
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>React Poznámky</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
