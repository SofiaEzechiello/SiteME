import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";

import Trabalhista from "./pages/Trabalhista";
import Previdenciario from "./pages/Previdenciario";
import Civel from "./pages/Civel";
import Empresarial from "./pages/Empresarial";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "quem-somos",
        Component: QuemSomos,
      },

      {
        path: "areas-de-atuacao/trabalhista",
        Component: Trabalhista,
      },

      {
        path: "areas-de-atuacao/previdenciario",
        Component: Previdenciario,
      },

      {
        path: "areas-de-atuacao/civil",
        Component: Civel,
      },

      {
        path: "areas-de-atuacao/empresarial",
        Component: Empresarial,
      },
    ],
  },
]);