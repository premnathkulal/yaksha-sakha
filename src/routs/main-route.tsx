import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shruthi from "../pages/shruthi/Shruthi.tsx";
import RagaTalaList from "../pages/raga-tala-list/RagaTalaList.tsx";
import HomePage from "../pages/home-page/HomePage.tsx";
import Himmela from "../pages/himmela/Himmela.tsx";
import Tuner from "../pages/tuner/Tuner.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home-page",
        element: <HomePage />,
      },
      {
        path: "/tuner",
        element: <Tuner />,
      },
      {
        path: "/",
        element: <Shruthi />,
      },
      {
        path: "/himmela",
        element: <Himmela />,
      },
      {
        path: "/raga-tala-list",
        element: <RagaTalaList />,
      },
    ],
  },
]);

export default appRouter;
