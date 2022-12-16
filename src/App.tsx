import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { ProductsProvider } from "./context/ShoppingCartContext";
import AuthContextProvider from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  const search = new URLSearchParams(location.search);
  console.log(search);
  const newParams = search.get("search");
  console.log(newParams);
  return (
    <AuthContextProvider>
      <ProductsProvider>
        <RouterProvider router={router} />;
      </ProductsProvider>
    </AuthContextProvider>
  );
}

export default App;
