import { useProductContext } from "../../context/ShoppingCartContext";
export default function Products() {
  const { products, addToCart, cart, removeFromCart } = useProductContext();
  console.log(cart);
  const formatMoney = (amount: number): string => {
    const formater = new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      maximumFractionDigits: 2,
    });
    return formater.format(amount);
  };

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            {/* <h1>{product.price}</h1> */}
            <h1>{formatMoney(product.price)}</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => addToCart(product)}
                className="rounded-md bg-rounded-md py-2 px-3 bg-indigo-600 text-white uppercase"
              >
                Add to cart
              </button>
              <button
                onClick={() => removeFromCart(product)}
                className="rounded-md bg-rounded-md py-2 px-3 bg-red-600 text-white uppercase"
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
