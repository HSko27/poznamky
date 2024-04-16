import React from 'react';
import Note from './Note';

interface NoteListProps {
  notes: { id: number; text: string }[];
  deleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
