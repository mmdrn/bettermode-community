import client from "../../../../graphqlClient";
import { useQuery } from "react-query";
import { GetPostDetailParams, GetPostDetailResponse } from "./types";
import { POST_QUERY } from "./constants";

const fetchPost = async (params: GetPostDetailParams): Promise<GetPostDetailResponse> => {
  const token = import.meta.env.VITE_AUTH_TOKEN;
  if (!token) throw new Error("API token is not configured");

  return client.request(
    POST_QUERY,
    { id: params.id },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
};

const usePost = (params: GetPostDetailParams) => {
  return useQuery<GetPostDetailResponse>(["post-detail", params], () => fetchPost({ ...params }));
};

export default usePost;
