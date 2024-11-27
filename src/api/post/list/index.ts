import client from "../../../../graphqlClient";
import { PostVariables, PostsResponse } from "./types";
import { GET_POSTS_QUERY } from "./constants";

export async function getPostsList({
  pageParam = null,
  ...variables
}: PostVariables & { pageParam?: string | null }): Promise<PostsResponse> {
  return client.request(GET_POSTS_QUERY, { ...variables, after: pageParam });
}
