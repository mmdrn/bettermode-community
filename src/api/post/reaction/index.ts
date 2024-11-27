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
  return client.request(ADD_REACTION_QUERY, {
    postId: params.postId,
    input: params.input,
  });
}

export async function removeReactionFromPost(
  params: RemoveReactionFromPostParams
): Promise<RemoveReactionFromPostResponse> {
  return client.request(REMOVE_REACTION_QUERY, {
    postId: params.postId,
    reaction: params.reaction,
  });
}
