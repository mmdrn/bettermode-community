import { Heart } from "lucide-react";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";
import { PostReaction } from "../../api/post/single/types";
import { twMerge } from "tailwind-merge";
import useReactions from "./useReactions";

/**
 * Props for the Reactions component
 * @interface Props
 * @property {Function} clickReaction - Function to handle reaction click events
 * @property {PostReaction[]} currentReactions - Array of current reactions on the post
 */
type Props = {
  clickReaction: (params: { reaction: (typeof AVAILABLE_REACTIONS)[number]["key"] }) => void;
  currentReactions: PostReaction[];
};

/**
 * Reactions component that handles displaying and managing post reactions
 * @component
 * @param {Props} props - Component props
 * @param {Function} props.clickReaction - Function to handle reaction click events
 * @param {PostReaction[]} props.currentReactions - Array of current reactions on the post
 * @returns {JSX.Element} Rendered component
 */
export default function Reactions({ clickReaction, currentReactions }: Props) {
  const { get, set } = useReactions(currentReactions);

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

    return (
      <div className="w-full flex items-center justify-start gap-2 mt-4">
        {/* Map through current reactions and display their emojis */}
        <div className="flex gap-4">
          {currentReactions.map((item) => (
            <div className="flex items-center justify-start font-geist-mono">
              <span
                key={item.reaction}
                className="p-2 w-10 h-10 bg-zinc-200 dark:bg-zinc-600 rounded-full transition-colors flex items-center justify-center"
                data-testid={`${item.reaction}-current`}
              >
                {AVAILABLE_REACTIONS.find((reaction) => reaction.key === item.reaction)?.emoji}
              </span>
              {item.count && (
                <span className="text-xs font-black text-zinc-600 dark:text-zinc-400 ml-2">
                  {item.count}
                </span>
              )}
            </div>
          ))}
        </div>
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
