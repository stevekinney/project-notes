const updateNote =
  (id: Note['id'], field: keyof Note, value: string) => (notes: Note[]) => {
    return notes.map((note) => {
      if (note.id !== id) return note;
      return { ...note, [field]: value };
    });
  };

export default updateNote;
