import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "./home";
import PostsList from "./posts";
import PostDetail from "./posts/detail";

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
        <PostsList />
      </MainLayout>
    ),
  },
  {
    path: "/posts/:postId",
    element: (
      <MainLayout>
        <PostDetail />
      </MainLayout>
    ),
  },
]);

export default router;
