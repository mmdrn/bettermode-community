import client from "../../../../graphqlClient";
import { useInfiniteQuery } from "react-query";
import { PostVariables, PostsResponse } from "./types";
import { POSTS_QUERY } from "./constants";

const fetchPosts = async ({
  pageParam = null,
  ...variables
}: PostVariables & { pageParam?: string | null }): Promise<PostsResponse> => {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    POSTS_QUERY,
    { ...variables, after: pageParam },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
};

const usePosts = (variables: PostVariables) => {
  return useInfiniteQuery<PostsResponse, Error>(
    ["posts", variables],
    ({ pageParam }) => fetchPosts({ ...variables, pageParam }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.posts.pageInfo.hasNextPage ? lastPage.posts.pageInfo.endCursor : undefined,
      staleTime: 5000,
    }
  );
};

export default usePosts;
