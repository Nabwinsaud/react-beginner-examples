import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";

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
  return <RouterProvider router={router} />;
}

export default App;
