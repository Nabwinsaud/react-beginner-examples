import Filter from "./blog/Filter";
import Record from "../components/users/Record";
import AccordionComponent from "../components/Accordion";
import ReadOnly from "../components/users/ReadOnly";
import { FilterOptions } from "./urlsearchparams/UrlSearchParams";
import { ProductList } from "../components/productImages/ProductImages";
import { OTPInput } from "../components/otp/OtpPin";
import { ProductGallery } from "../components/productImages/ProductGallery";
import Cart from "./cart/Cart";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      {/* <AccordionComponent /> */}
      {/* <Record /> */}
      {/* <ReadOnly/> */}
      {/* <Filter /> */}
      {/* <FilterOptions /> */}
      {/* <ProductList /> */}
      <ProductGallery />
      {/* <Cart /> */}
      {/* <h1>The coding junkie</h1> */}
    </div>
  );
}
