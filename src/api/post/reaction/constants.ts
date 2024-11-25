export const ADD_REACTION_QUERY = `
  mutation addReaction($input: AddReactionInput!, $postId: ID!) { 
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

export const REMOVE_REACTION_QUERY = `
  mutation removeReaction($reaction: String!, $postId: ID!) {
    removeReaction(reaction: $reaction, postId: $postId) {
      status
    }
  }
`;

export const AVAILABLE_REACTIONS = [
  {
    key: "heart",
    emoji: "❤️",
  },
  {
    key: "smile",
    emoji: "😁",
  },
  {
    key: "+1",
    emoji: "👍",
  },
  {
    key: "tada",
    emoji: "🎉",
  },
  {
    key: "open_mouth",
    emoji: "😮",
  },
  {
    key: "cry",
    emoji: "😢",
  },
];
