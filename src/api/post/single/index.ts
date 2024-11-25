import client from "../../../../graphqlClient";
import { GetPostDetailParams, GetPostDetailResponse } from "./types";
import { GET_POST_QUERY } from "./constants";

export async function getPostDetails(params: GetPostDetailParams): Promise<GetPostDetailResponse> {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    GET_POST_QUERY,
    { id: params.id },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}
