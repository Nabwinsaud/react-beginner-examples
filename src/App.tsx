import AccordionComponent from "./components/Accordion";
import Record from "./components/users/Record";
import ReadOnly from "./components/users/ReadOnly";
import { UserProps } from "./components/users/ReadOnly";
import Filter from "./pages/blog/Filter";
function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      {/* <AccordionComponent /> */}
      {/* <Record /> */}
      <Filter />
    </div>
  );
}

export default App;
