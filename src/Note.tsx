import React from 'react';

interface NoteProps {
  note: { id: number; text: string };
  deleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button className='delBtn' onClick={() => deleteNote(note.id)}>Smazat</button>
    </div>
  );
}

export default Note;
