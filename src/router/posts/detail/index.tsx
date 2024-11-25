import moment from "moment";
import usePost from "../../../api/post/single";
import { Newspaper } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/loading";

export default function PostDetail() {
  const params = useParams();

  const { data, isFetching } = usePost({ id: params.postId! });

  return (
    <div className="container mx-auto">
      <div className="w-2/3 mx-auto flex items-center justify-center flex-col">
        {isFetching ? (
          <Loading className="mt-16" />
        ) : (
          <>
            <div className="w-full flex items-center justify-start gap-2 mb-4">
              <Link
                to="/posts"
                className="text-sm text-zinc-400 dark:text-zinc-300 hover:underline"
              >
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
              <h1 className="font-black w-full font-geist-mono transition-colors dark:text-white text-2xl my-9">
                {data?.post.title}
              </h1>
              <div
                className="text-sm leading-6 font-medium text-zinc-500 dark:text-white transition-colors flex flex-col items-start justify-start gap-3 [&>blockquote]:border-l-4 [&>blockquote]:border-zinc-300 [&>blockquote]:dark:border-zinc-400 [&>blockquote]:pl-4 [&>blockquote]:py-4 [&>blockquote]:transition-colors [&>h2]:mt-4 [&>h2]:text-xl"
                dangerouslySetInnerHTML={{
                  __html:
                    data?.post.fields
                      .find((field) => field.key === "content")
                      ?.value.slice(1, -1) ?? "",
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
