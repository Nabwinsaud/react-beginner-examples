export type Note = {
  id: number;
  title: string;
  body: string;
  category: string;
};

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
//   let dict: Record<string, string> = {};
//   categories.reduce((acc, category, i: number) => {
//     dict[i] = category;
//     return acc;
//   }, []);
//   const set = new Set([
//     notes.map((note) =>
//       note.category === "all"
//         ? note
//         : notes.filter((note) => note.category === category)
//     ),
//   ]);
//   const categories = Object.entries(
//     new Set(notes.map((note) => note.category))
//   );

//   const deletePost = (id: number): void => {
//     const prevPost = notes.filter((note: Note) => note.id !== id);
//     setNotes(prevPost);
//   };
