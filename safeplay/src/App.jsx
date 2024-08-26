import "./App.css";
import Features from "./components/features/Features";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout";


import Home from "./components/home";
import AwarenessCard from "./components/features/awarenessCard";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/uv-exposure",
          element: <Features />,
        },
        {
          path: "/allergic-awareness",
          element: <AwarenessCard/>,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
