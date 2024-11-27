import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { PostReaction } from "../../api/post/types";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";

type Props = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  reactions: PostReaction[];
  reactionsCount: number;
};

/**
 * Post component displays a blog post preview with title, description, and publication date
 * @component
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the post
 * @param {string} props.title - Title of the post
 * @param {string} props.description - Brief description or excerpt of the post
 * @param {string} props.publishedAt - Publication date of the post
 * @param {Array} props.reactions - Array of reaction objects associated with the post
 * @param {number} props.reactionsCount - Total count of reactions for the post
 * @returns {JSX.Element} Post preview card with link to full post
 */
export default function Post({
  id,
  title,
  description,
  publishedAt,
  reactions,
  reactionsCount,
}: Props) {
  const handleGetReactionEmojies = (reactions: PostReaction[]) => {
    const reactionsKeys = reactions.map((reaction) => reaction.reaction);
    return AVAILABLE_REACTIONS.filter((reaction) => reactionsKeys.includes(reaction.key)).map(
      (reaction) => reaction.emoji
    );
  };

  return (
    <Link
      className="flex flex-col items-start justify-start [&:hover>div>h2]:text-bettermode-green-primary"
      to={`/posts/${id}`}
    >
      {/* Post thumbnail placeholder with newspaper icon */}
      <div className="w-full aspect-[3/2] bg-zinc-200 dark:bg-zinc-600 text-zinc-400 dark:text-white rounded-xl relative flex items-center justify-center overflow-hidden transition-colors">
        <Newspaper data-testid="newspaper-icon" strokeWidth={1} size={90} />
        {reactionsCount ? (
          <div className="absolute left-4 bottom-4 flex items-center justify-start">
            {/* Reaction count */}
            {handleGetReactionEmojies(reactions).map((reaction, index) => (
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
                transform: `translateX(-${(reactions.length + 1) * 5}px)`,
              }}
            >
              +{reactionsCount}
            </span>
          </div>
        ) : null}
      </div>

      {/* Post content container */}
      <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
        {/* Publication date */}
        <p className="text-xs font-geist-mono font-bold text-zinc-400 dark:text-zinc-300 transition-colors mb-3">
          {publishedAt}
        </p>

        {/* Post title with line clamp */}
        <h2 className="line-clamp-2 font-black w-full font-geist-mono mb-3 transition-colors dark:text-white">
          {title}
        </h2>

        {/* Post description with line clamp */}
        <p className="line-clamp-3 text-sm leading-6 font-medium text-zinc-500 dark:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
}
