import { PostReaction } from "../types";

export type GetPostDetailParams = {
  id: string;
};

export type Post = {
  subscribersCount: number;
  postTypeId: string;
  reactionsCount: number;
  hasMoreContent: boolean;
  isAnonymous: boolean;
  isHidden: boolean;
  shortContent: string;
  createdAt: string;
  publishedAt: string;
  ownerId: string;
  createdById: string;
  status: string;
  spaceId: string;
  imageIds: unknown[];
  pinnedInto: unknown[];
  repliesCount: number;
  totalRepliesCount: number;
  locked: boolean;
  repliedToIds: unknown[];
  repliedToId: unknown;
  title: string;
  description: string;
  fields: {
    key: string;
    value: string;
  }[];
  relativeUrl: string;
  url: string;
  reactions: PostReaction[];
};

export type GetPostDetailResponse = {
  post: Post;
};
