import Editing from './edit';

const NoteContent = ({ note, setNotes, isEditing }) => {
  if (isEditing) return <Editing note={note} setNotes={setNotes} />;
  return (
    <div className="flex flex-col h-full gap-4 p-4 overflow-y-scroll">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteContent;
