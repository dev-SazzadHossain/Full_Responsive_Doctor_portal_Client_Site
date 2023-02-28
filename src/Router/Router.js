import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);