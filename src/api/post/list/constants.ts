export const GET_POSTS_QUERY = `
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
      publishedAt
      reactionsCount
      reactions	{
        count
        reaction
        reacted
      }
    }
  }
}
`;
