import { useState } from "react";
type Note = {
  id: number;
  title: string;
  body: string;
  category: string;
};

// type Partial<T> = { [P in keyof T]?: T[P] };

const initialNotes: Note[] = [
  {
    id: 1,
    title: "My first note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Personal",
  },
  {
    id: 2,
    title: "My second note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "work",
  },
  {
    id: 3,
    title: "My third note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Personal",
  },
  {
    id: 3,
    title: "My third note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "work",
  },
];

export default function Filter() {
  //  const [note, setNote] = useState<Omit<Note, "id">>();
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [category, setCategory] = useState<string>("all");

  // add notes
  const addPost = (note: Note) => {
    // const noteIndex = notes.findIndex((newNote) => newNote.id === note.id);
    const checkIfAlreadyExist = notes.find(
      (newNote: Note): boolean => newNote.id === note.id
    );
    if (!checkIfAlreadyExist) {
      setNotes([...notes, note]);
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  // delete note
  const deletePost = (noteItem: Note): void => {
    const prevPost = notes.filter((note: Note) => note.id !== noteItem.id);
    setNotes(prevPost);
  };
  // filter category
  const categories: readonly string[] = Array.from(
    new Set(notes.map((note) => note.category))
  );
  const filteredNote =
    category === "all"
      ? notes
      : notes.filter((note: Note) => note.category === category);

  return (
    <div className="flex flex-col">
      <label>category</label>
      <select
        id="category"
        onChange={handleCategoryChange}
        value={category}
        className="block w-full rounded-md shadow-md focus:outline-none focus:shadow-outline-blue"
      >
        <option value="all">ALl</option>
        {categories.map((category: string) => (
          <option className="border-b" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="flex flex-col bg-slate-300 text-black text-md rounded-md px-2 ">
        {filteredNote.map(
          (filterNote, index: number): JSX.Element => (
            <div key={index}>
              <p className="text-lg text-black">{filterNote.title}</p>
              <h4 className="flex items-center">
                {" "}
                <span className="uppercase font-bold">category:</span>{" "}
                {filterNote.category}
              </h4>
              <p>{filterNote.body}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
