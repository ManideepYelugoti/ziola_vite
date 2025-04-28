import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Inventory from "./pages/inventory";
import AboutPage from "./pages/About";
import AboutCompany from "./pages/About/AboutCompany";
import Vision from "./pages/About/Vision";
import Mission from "./pages/About/Mission";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { 
          path: "about", 
          element: <AboutPage />,
          children: [
            { path: "", element: <Navigate to="aboutcompany" replace /> },
            { path: "aboutcompany", element: <AboutCompany /> },
            { path: "vision", element: <Vision /> },
            { path: "mission", element: <Mission /> },
          ]
        },
        { path: "/inventory", element: <Inventory /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
