import { useEffect, useMemo, useRef, useState } from "react";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";
import { PostReaction } from "../../api/post/types";

/**
 * Custom hook to manage reaction states and interactions
 * @param currentReactions - Array of current post reactions
 * @returns Object containing reaction states and refs
 */
export default function useReactions(currentReactions?: PostReaction[]) {
  const [showReactions, setShowReactions] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reactionsRef = useRef<HTMLDivElement>(null);

  /**
   * Memoized value to determine the currently active reaction
   * Returns the reaction key if user has reacted, null otherwise
   */
  const activeReaction = useMemo<(typeof AVAILABLE_REACTIONS)[number]["key"] | null>(() => {
    if (!currentReactions?.length) return null;

    const reactedItem = currentReactions.find((item: PostReaction) => item.reacted);

    return reactedItem?.reaction ?? null;
  }, [currentReactions]);

  /**
   * Effect to handle clicking outside of reactions popup
   * Closes the reactions popup when clicking outside
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        reactionsRef.current &&
        buttonRef.current &&
        !reactionsRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowReactions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGetReactionEmojies = (reactions: PostReaction[]) => {
    const reactionsKeys = reactions.map((reaction) => reaction.reaction);
    return AVAILABLE_REACTIONS.filter((reaction) => reactionsKeys.includes(reaction.key)).map(
      (reaction) => reaction.emoji
    );
  };

  return {
    get: {
      showReactions,
      buttonRef,
      reactionsRef,
      activeReaction,
    },
    set: {
      setShowReactions,
    },
    on: {
      handleGetReactionEmojies,
    },
  };
}
