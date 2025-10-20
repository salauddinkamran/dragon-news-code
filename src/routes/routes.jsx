import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CatagoryNews from "../pages/CatagoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: "/category/:id",
        element: <CatagoryNews></CatagoryNews>,
        loader: () => fetch("/news.json")
      }
    ]
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>
  },
  {
    path: "/news",
    element: <h1>New Layout</h1>
  },
  {
    path: "/*",
    element: <h1>Error Layout</h1>
  }
])

export default router