import Products from "./Products";
import {
  IProductContext,
  useProductContext,
} from "../../context/ShoppingCartContext";

export default function Cart() {
  //   console.log(products);
  const { products } = useProductContext();
  console.log(products);

  return (
    <div className="flex flex-col">
      <Products />
    </div>
  );
}
