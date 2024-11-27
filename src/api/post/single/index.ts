import client from "../../../../graphqlClient";
import { GetPostDetailParams, GetPostDetailResponse } from "./types";
import { GET_POST_QUERY } from "./constants";

export async function getPostDetails(params: GetPostDetailParams): Promise<GetPostDetailResponse> {
  return client.request(GET_POST_QUERY, { id: params.id });
}
