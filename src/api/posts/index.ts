import client from "../../../graphqlClient";
import { useInfiniteQuery } from "react-query";
import { PostVariables, PostsResponse } from "./types";

const POSTS_QUERY = `
  query GetPosts($after: String, $before: String, $excludePins: Boolean, $filterBy: [PostListFilterByInput!], $limit: Int!, $offset: Int, $orderBy: PostListOrderByEnum, $orderByString: String, $postTypeIds: [String!], $reverse: Boolean, $spaceIds: [ID!], $query: String) {
    posts(
      after: $after
      before: $before
      excludePins: $excludePins
      filterBy: $filterBy
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
      spaceIds: $spaceIds
      query: $query
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        slug
        title
        description
        publishedAt	
      }
    }
  }
`;

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
        lastPage.posts.pageInfo.hasNextPage
          ? lastPage.posts.pageInfo.endCursor
          : undefined,
      staleTime: 5000,
    }
  );
};

export default usePosts;
