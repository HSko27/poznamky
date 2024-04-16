import React, { useState } from 'react';

interface NoteFormProps {
  addNote: (text: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Napište svoji poznámku..."
        value={text}
        onChange={handleChange}
      />
      <button  type="submit">+</button>
    </form>
  );
}

export default NoteForm;
