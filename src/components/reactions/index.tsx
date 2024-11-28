import { Heart } from "lucide-react";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";
import { twMerge } from "tailwind-merge";
import { PostReaction } from "../../api/post/types";
import useReactions from "./useReactions";

/**
 * Props for the Reactions component
 * @interface Props
 * @property {Function} clickReaction - Function to handle reaction click events
 * @property {PostReaction[]} currentReactions - Array of current reactions on the post
 * @property {number} reactionsCount - Total count of reactions on the post
 */
type Props = {
  // eslint-disable-next-line no-unused-vars
  clickReaction: (params: { reaction: (typeof AVAILABLE_REACTIONS)[number]["key"] }) => void;
  currentReactions: PostReaction[];
  reactionsCount: number;
};

/**
 * Reactions component that handles displaying and managing post reactions
 * @component
 * @param {Props} props - Component props
 * @param {Function} props.clickReaction - Function to handle reaction click events
 * @param {PostReaction[]} props.currentReactions - Array of current reactions on the post
 * @returns {JSX.Element} Rendered component
 */
export default function Reactions({ clickReaction, currentReactions, reactionsCount }: Props) {
  const { get, set, on } = useReactions(currentReactions);

  /**
   * Renders the available reactions popup when showReactions is true
   * @function
   * @returns {JSX.Element | null} JSX element for available reactions or null if popup is hidden
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
              key={reaction.emoji}
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
              data-testid={`${reaction.emoji}-button`}
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
   * @function
   * @returns {JSX.Element | null} JSX element for current reactions or null if no reactions
   */
  const handleRenderCurrentReactions = () => {
    if (!currentReactions.length) return null;

    return reactionsCount ? (
      <div className="mt-6 flex items-center justify-start">
        {/* Reaction count */}
        {on.handleGetReactionEmojies(currentReactions).map((reaction, index) => (
          <span
            key={reaction}
            className="text-xs dark:text-zinc-300 transition-colors bg-white border border-zinc-200 dark:border-zinc-400 dark:bg-zinc-500 shadow-md p-2 rounded-full w-[31px] h-[31px] flex items-center justify-center"
            style={{
              transform: `translateX(-${index * 5}px)`,
            }}
          >
            {reaction}
          </span>
        ))}
        {/* Reaction count */}
        <span
          className="text-[10px] font-geist-mono font-semibold text-bettermode-green-primary transition-colors ml-1 rounded-full bg-white border border-zinc-200 dark:border-zinc-400 dark:bg-zinc-500 w-[31px] h-[31px] flex items-center justify-center shadow-md"
          style={{
            transform: `translateX(-${(currentReactions.length + 1) * 5}px)`,
          }}
        >
          +{reactionsCount}
        </span>
      </div>
    ) : null;
  };

  return (
    <>
      <div className="w-full mt-8 relative flex flex-col items-start justify-start">
        {/* Reaction trigger button */}
        <button
          ref={get.buttonRef}
          onClick={() => set.setShowReactions(!get.showReactions)}
          className="px-4 py-2 h-[42px] flex items-center justify-center rounded-full border dark:border-zinc-400 bg-white dark:bg-zinc-500 dark:hover:bg-zinc-600 transition-colors dark:text-white"
        >
          {/* Display active reaction emoji or default heart icon */}
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
