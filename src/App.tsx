import AccordionComponent from "./components/Accordion";
import Record from "./components/users/Record";
function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      {/* <AccordionComponent /> */}
      <h1 className="text-center my-2 uppercase text-pink-700 text-4xl ">
        Let build some beginner stuffs
      </h1>
      <Record />
    </div>
  );
}

export default App;
