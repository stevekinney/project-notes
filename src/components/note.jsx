import { useState } from 'react';
import EmptyView from './empty';
import NoteContent from './note-content';

const Note = ({ notes, currentNote, setNotes }) => {
  const [isEditing, setIsEditing] = useState(true);
  if (!currentNote) return <EmptyView />;

  const note = notes.find(({ id }) => id === currentNote);

  return (
    <section className="flex flex-col w-full h-full bg-white rounded-r-2xl">
      <header className="flex p-2 border-b shadow-lg border-tr-2 place-content-end rounded-tr-2xl border-primary-400 bg-primary-400">
        <button onClick={() => setIsEditing((x) => !x)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </header>
      <NoteContent note={note} setNotes={setNotes} isEditing={isEditing} />
    </section>
  );
};

export default Note;
