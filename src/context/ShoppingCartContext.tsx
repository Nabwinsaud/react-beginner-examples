import React, { useState, createContext, useContext } from "react";
import Products from "../pages/cart/Products";

interface IProducts {
  id: number;
  title: string;
  price: number;
  rating?: number;
}

// eslint-disable @typescript-eslint/no-empty-interface
export interface ICartItem extends IProducts {
  quantity?: number;
}

export interface IProductContext {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  cart: ICartItem[];
  wishList: IProducts[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (product: IProducts) => void;
  addToWishList: (product: IProducts) => void;
  getTotalPrice: () => number;
  persistCart: () => void;
}
const ProductsContext = createContext({} as IProductContext);

interface IProps {
  children: React.ReactNode;
}
export function ProductsProvider({ children }: IProps) {
  const [products, setProducts] = useState<IProducts[]>([
    { id: 1, title: "New Men shoes", price: 200 },
    { id: 2, title: " shoes", price: 600 },
    { id: 3, title: " TShirt", price: 400 },
    { id: 4, title: "Winter jacket", price: 500 },
  ]);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [wishList, setWishList] = useState<IProducts[]>([]);

  function addToCart(product: IProducts) {
    const checkIfExist = products.findIndex((p) => p.id === product.id);
    console.log(checkIfExist);

    if (checkIfExist) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      return;
    }
  }

  function removeFromCart(product: IProducts) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function addToWishList(product: IProducts) {
    setWishList([...wishList, product]);
  }

  function getTotalPrice() {
    return cart.reduce((acc, product: IProducts) => acc + product.price, 0);
  }

  function persistCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        wishList,
        addToWishList,
        getTotalPrice,
        persistCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductsContext);
}

// function useProducts() {
//   const context = React.useContext<IProductContext>(ProductsContext);
//   return context;
// }

// export { ProductsProvider, useProducts };
