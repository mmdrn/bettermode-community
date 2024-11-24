import moment from "moment";
import usePost from "../../../api/post/single";
import { Newspaper } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function PostDetail() {
  const params = useParams();

  const { data, isFetching, isError } = usePost({ id: params.postId! });

  return (
    <div className="w-2/3 mx-auto flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-start gap-2 mb-4">
        <Link to="/posts" className="text-sm text-zinc-400 dark:text-zinc-300 hover:underline">
          Posts
        </Link>
        <span className="text-sm text-zinc-400 dark:text-zinc-300">/</span>
        <span className="text-sm text-zinc-600 dark:text-zinc-100">{data?.post.title}</span>
      </div>
      <div className="w-full aspect-[3/1] bg-zinc-200 dark:bg-zinc-600 text-zinc-400 dark:text-white rounded-xl relative flex items-center justify-center overflow-hidden transition-colors">
        <Newspaper strokeWidth={1} size={90} />
      </div>
      <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
        <p className="text-xs font-geist-mono font-bold text-zinc-400 dark:text-zinc-300 transition-colors mb-3">
          {moment(data?.post.createdAt).format("YYYY MMMM DD")}
        </p>
        <h2 className="font-black w-full font-geist-mono mb-3 transition-colors dark:text-white">
          {data?.post.title}
        </h2>
        <div
          className="text-sm leading-6 font-medium text-zinc-500 dark:text-zinc-300 transition-colors flex flex-col items-start justify-start gap-2"
          dangerouslySetInnerHTML={{
            __html:
              data?.post.fields.find((field) => field.key === "content")?.value.slice(1, -1) ?? "",
          }}
        />
      </div>
    </div>
  );
}
