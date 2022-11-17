import { useState } from 'react';
import NoteView from './note-view';
import NotesList from './notes-list';

import data from '../api/notes.json';

const Application = () => {
  const [notes, setNotes] = useState(data);
  const [currentNote, setCurrentNote] = useState();

  return (
    <main className="flex items-center w-full h-full shadow-2xl overflow-none place-content-center bg-slate-700">
      <div className="h-[80%] w-5/6 rounded-2xl border-4 border-primary-800 bg-primary-100">
        <div className="\rounded-2xl flex h-full w-full rounded-2xl ">
          <NotesList
            notes={notes}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
          <NoteView
            notes={notes}
            setNotes={setNotes}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
        </div>
      </div>
    </main>
  );
};

export default Application;
