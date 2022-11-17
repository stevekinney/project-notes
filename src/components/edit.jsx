import updateNote from '../lib/update-note';

const Editing = ({ note, setNotes }) => {
  return (
    <section className="flex flex-col w-full h-full p-8 bg-white rounded-br-2xl">
      <label htmlFor="edit-note-title" className="block mb-4">
        <span className="block">Title</span>
        <input
          id="edit-note-title"
          className="w-full"
          value={note.title}
          name="title"
          onChange={(e) =>
            setNotes(updateNote(note.id, e.target.name, e.target.value))
          }
        />
      </label>
      <label htmlFor="edit-note-content" className="block mb-4">
        <span className="block">Content</span>
        <textarea
          id="edit-note-content"
          className="w-full"
          value={note.content}
          name="content"
          onChange={(e) =>
            setNotes(updateNote(note.id, e.target.name, e.target.value))
          }
        />
      </label>
    </section>
  );
};

export default Editing;
