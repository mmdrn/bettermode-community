import { AVAILABLE_REACTIONS } from "./constants";

export type AddReactionToPostParams = {
  input: {
    overrideSingleChoiceReactions: boolean;
    reaction: (typeof AVAILABLE_REACTIONS)[number]["key"];
  };
  postId: string;
};

export type RemoveReactionFromPostParams = {
  reaction: (typeof AVAILABLE_REACTIONS)[number]["key"];
  postId: string;
};

export type AddReactoinToPostResult = {
  addReaction: {
    status: "succeeded" | "failed";
  };
};

export type RemoveReactoinFromPostResult = {
  removeReaction: {
    status: "succeeded" | "failed";
  };
};

export type AddReactionToPostResponse = AddReactoinToPostResult;

export type RemoveReactionFromPostResponse = RemoveReactoinFromPostResult;
