import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Layout</h1>
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>
  },
  {
    path: "/new",
    element: <h1>New Layout</h1>
  },
  {
    path: "/*",
    element: <h1>Error Layout</h1>
  }
])

export default router