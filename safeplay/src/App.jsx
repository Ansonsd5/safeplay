import "./App.css";
import UVExposure from "./components/features/uv-exposure/index.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/appLayout";

import Home from "./components/home";
import AwarenessCard from "./components/features/awarenessCard";

// Main App component with routing configuration
function App() {

    // Define the routes for the application
    const router = createBrowserRouter([
        {
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/uv-exposure",
                    element: <UVExposure/>,
                },
                {
                    path: "/allergic-awareness",
                    element: <AwarenessCard/>,
                },
                {
                    path: "*",
                    element: <Home/>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router}/>;
}

export default App;
