export const POST_QUERY = `query GetPost($id: ID!) {
  post(id: $id) {    id
    slug
    mappingFields {
      key
      type
      value
    }
    fields {
      key
      value
    }
    subscribersCount
    postTypeId
    reactionsCount
    hasMoreContent
    isAnonymous
    isHidden
    shortContent
    createdAt
    publishedAt
    ownerId
    createdById
    status
    spaceId
    imageIds
    pinnedInto
    repliesCount
    totalRepliesCount
    locked
    repliedToIds
    repliedToId
    title
    description
    relativeUrl
    url
  }
}`;
