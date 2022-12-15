import Filter from "./blog/Filter";
import Record from "../components/users/Record";
import AccordionComponent from "../components/Accordion";
import ReadOnly from "../components/users/ReadOnly";
import { FilterOptions } from "./urlsearchparams/UrlSearchParams";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      {/* <AccordionComponent /> */}
      {/* <Record /> */}
      {/* <ReadOnly/> */}
      {/* <Filter /> */}
      <FilterOptions />
      {/* <h1>The coding junkie</h1> */}
    </div>
  );
}
