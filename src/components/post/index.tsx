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
      <div className="w-full aspect-[3/2] bg-zinc-200 text-zinc-400 rounded-xl relative flex items-center justify-center overflow-hidden">
        <Newspaper strokeWidth={1} size={90} />
      </div>
      <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
        <p className="text-xs font-geist-mono font-bold text-zinc-400 mb-3">
          {publishedAt}
        </p>
        <h2 className="line-clamp-2 font-black w-full font-geist-mono mb-3 transition-colors">
          {title}
        </h2>
        <p className="line-clamp-3 text-sm leading-6 font-medium text-zinc-500">{description}</p>
      </div>
    </Link>
  );
}
