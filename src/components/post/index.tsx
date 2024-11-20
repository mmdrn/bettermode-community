import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
};

export default function Post({ id, title, description, publishedAt }: Props) {
  return (
    <Link
      className="flex flex-col items-start justify-start [&:hover>div>h2]:text-bettermode-green-primary"
      to={`/posts/${id}`}
    >
      <div className="w-full aspect-[3/2] bg-zinc-200 dark:bg-zinc-600 text-zinc-400 dark:text-white rounded-xl relative flex items-center justify-center overflow-hidden transition-colors">
        <Newspaper strokeWidth={1} size={90} />
      </div>
      <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
        <p className="text-xs font-geist-mono font-bold text-zinc-400 dark:text-zinc-300 transition-colors mb-3">
          {publishedAt}
        </p>
        <h2 className="line-clamp-2 font-black w-full font-geist-mono mb-3 transition-colors dark:text-white">
          {title}
        </h2>
        <p className="line-clamp-3 text-sm leading-6 font-medium text-zinc-500 dark:text-zinc-300 transition-colors">{description}</p>
      </div>
    </Link>
  );
}
