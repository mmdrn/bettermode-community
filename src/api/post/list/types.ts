import { PostReaction } from "../types";

export type PostListFilterByInput = {
  // Add filter input fields based on your API requirements
};

export enum PostListOrderByEnum {}

export type PostVariables = {
  // Cursor for pagination - fetch items after this cursor
  after?: string;

  // Cursor for pagination - fetch items before this cursor
  before?: string;

  // Whether to exclude pinned posts from results
  excludePins?: boolean;

  // Array of filter criteria for posts
  filterBy?: Array<PostListFilterByInput>;

  // Maximum number of items to return
  limit: number;

  // Number of items to skip
  offset?: number;

  // Enum-based sorting option
  orderBy?: PostListOrderByEnum;

  // String-based sorting option
  orderByString?: string;

  // Filter by specific post types
  postTypeIds?: Array<string>;

  // Reverse the sort order
  reverse?: boolean;

  // Filter posts by space IDs
  spaceIds?: Array<string>;

  // Search query string
  query?: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  reactions: PostReaction[];
  reactionsCount: number;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type PostsResponse = {
  posts: {
    totalCount: number;
    pageInfo: PageInfo;
    nodes: Post[];
  };
};
