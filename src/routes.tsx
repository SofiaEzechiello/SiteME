import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "quem-somos", Component: QuemSomos },
    ],
  },
]);
