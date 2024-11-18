import client from "../../../../graphqlClient";
import { useQuery } from "react-query";
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
      }
    }
  }
`;

const fetchPosts = async (variables: PostVariables): Promise<PostsResponse> => {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(POSTS_QUERY, variables, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
};

const usePosts = (variables: PostVariables) => {
  return useQuery(["posts", variables], () => fetchPosts(variables), {
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export default usePosts;
