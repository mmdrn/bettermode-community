import { AVAILABLE_REACTIONS } from "./reaction/constants";

export type PostReaction = {
  count: number;
  reaction: (typeof AVAILABLE_REACTIONS)[number]["key"];
  reacted: boolean;
};
