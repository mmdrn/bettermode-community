import { Heart } from "lucide-react";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";
import { PostReaction } from "../../api/post/single/types";
import { twMerge } from "tailwind-merge";
import useReactions from "./useReactions";

/**
 * Props for the Reactions component
 * @param clickReaction - Function to handle reaction click events
 * @param currentReactions - Optional array of current reactions on the post
 */
type Props = {
  clickReaction: (params: { reaction: (typeof AVAILABLE_REACTIONS)[number]["key"] }) => void;
  currentReactions: PostReaction[];
};
export default function Reactions({ clickReaction, currentReactions }: Props) {
  const { get, set } = useReactions(currentReactions);

  /**
   * Renders the available reactions popup when showReactions is true
   * @returns JSX element for available reactions or null
   */
  const handleRenderAvailableReactions = () => {
    if (!get.showReactions) return null;

    return (
      <div
        ref={get.reactionsRef}
        className="absolute bottom-14 left-0 bg-white dark:bg-zinc-800 border dark:border-zinc-600 rounded-full p-2 flex items-center justify-start gap-2 shadow-lg"
      >
        {/* Map through available reactions */}
        {AVAILABLE_REACTIONS.map((reaction) => {
          return (
            <button
              onClick={() => {
                clickReaction({
                  reaction: reaction.key,
                });
                set.setShowReactions(false);
              }}
              className={twMerge(
                "p-2 w-10 h-10 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors flex items-center justify-center",
                get.activeReaction === reaction.key && "bg-zinc-100 dark:bg-zinc-700"
              )}
            >
              {reaction.emoji}
            </button>
          );
        })}
      </div>
    );
  };

  /**
   * Renders the current reactions display when reactions exist
   * @returns JSX element for current reactions or null
   */
  const handleRenderCurrentReactions = () => {
    if (!currentReactions.length) return null;

    return (
      <div className="w-full flex items-center justify-start gap-2 mt-4">
        {currentReactions.map((item) => (
          <span className="p-2 w-10 h-10 bg-zinc-200 dark:bg-zinc-600 rounded-full transition-colors flex items-center justify-center">
            {AVAILABLE_REACTIONS.find((reaction) => reaction.key === item.reaction)?.emoji}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="w-full mt-8 relative flex flex-col items-start justify-start">
        {/* Reaction trigger button */}
        <button
          ref={get.buttonRef}
          onClick={() => set.setShowReactions(!get.showReactions)}
          className="px-4 py-2 h-[42px] flex items-center justify-center rounded-full border dark:border-zinc-400 bg-transparent dark:hover:bg-zinc-600 transition-colors dark:text-white"
        >
          {currentReactions.length ? (
            AVAILABLE_REACTIONS.find((reaction) => reaction.key === get.activeReaction)?.emoji
          ) : (
            <Heart strokeWidth={2} size={20} className="fill-white dark:fill-zinc-700" />
          )}
        </button>

        {/* Reactions popup */}
        {handleRenderAvailableReactions()}
      </div>

      {/* Display current reactions */}
      {handleRenderCurrentReactions()}
    </>
  );
}
