import client from "../../../../graphqlClient";
import { PostVariables, PostsResponse } from "./types";
import { GET_POSTS_QUERY } from "./constants";

export async function getPostsList({
  pageParam = null,
  ...variables
}: PostVariables & { pageParam?: string | null }): Promise<PostsResponse> {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    GET_POSTS_QUERY,
    { ...variables, after: pageParam },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}
