import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Inventory from "./pages/inventory";

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <Home /> },
        {path:'/inventory',element:<Inventory />}
      ]
    }
  ])

  return (  
     <RouterProvider router={router} />
  )
}

export default App
