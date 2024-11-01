import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shruthi from "../pages/shruthi.tsx";
import Tala from "../pages/tala.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: '/',
        // element: <Home />
      },
      {
        path: "/shruthi",
        element: <Shruthi />,
      },
      {
        path: "/tala",
        element: <Tala />,
      },
    ],
  },
]);

export default appRouter;
