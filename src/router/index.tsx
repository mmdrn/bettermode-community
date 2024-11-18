import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "./home";
import Posts from "./posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/posts",
    element: (
      <MainLayout>
        <Posts />
      </MainLayout>
    ),
  },
]);

export default router;
