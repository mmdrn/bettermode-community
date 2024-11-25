import client from "../../../../graphqlClient";
import {
  AddReactionToPostParams,
  AddReactionToPostResponse,
  RemoveReactionFromPostParams,
  RemoveReactionFromPostResponse,
} from "./types";
import { ADD_REACTION_QUERY, REMOVE_REACTION_QUERY } from "./constants";

export async function addReactionToPost(
  params: AddReactionToPostParams
): Promise<AddReactionToPostResponse> {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    ADD_REACTION_QUERY,
    {
      postId: params.postId,
      input: params.input,
    },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function removeReactionFromPost(
  params: RemoveReactionFromPostParams
): Promise<RemoveReactionFromPostResponse> {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    REMOVE_REACTION_QUERY,
    {
      postId: params.postId,
      reaction: params.reaction,
    },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}
