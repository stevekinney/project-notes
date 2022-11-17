import { useState } from 'react';
import EmptyView from './empty';
import Note from './note';

const NoteView = ({ notes, setNotes, currentNote, setCurrentNote }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!currentNote) return <EmptyView />;

  const note = notes.find(({ id }) => id === currentNote);

  return (
    <section className="flex flex-col w-full h-full bg-white rounded-r-2xl">
      <header className="flex gap-2 p-2 border-b shadow-lg border-tr-2 place-content-end rounded-tr-2xl border-primary-400 bg-primary-400">
        <button
          className="border-0 rounded-full bg-inherit"
          onClick={() => {
            setIsEditing(false);
            setCurrentNote();
          }}
        >
          ❌
        </button>
      </header>
      <Note note={note} setNotes={setNotes} isEditing={isEditing} />
      <footer className="flex gap-2 p-2 border-2 border-b border-l-0 shadow-lg place-content-end rounded-br-2xl border-primary-400 bg-primary-50">
        <button onClick={() => setIsEditing((x) => !x)}>
          {isEditing ? '💾 Save' : '✍️ Edit'}
        </button>
      </footer>
    </section>
  );
};

export default NoteView;
