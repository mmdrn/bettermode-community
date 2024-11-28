import moment from "moment";
import Loading from "../../../components/loading";
import Error from "../../../components/error";
import Reactions from "../../../components/reactions";
import usePostDetail from "./useDetail";
import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function PostDetail() {
  const { variables: get, methods: on } = usePostDetail();

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="w-full lg:w-2/3 mx-auto flex items-center justify-center flex-col">
        {get.isLoading ? (
          // Show loading spinner while fetching data
          <Loading className="mt-16" />
        ) : get.isError ? (
          <Error />
        ) : (
          <>
            {/* Breadcrumb navigation */}
            <div className="w-full flex items-center justify-start gap-2 mb-4">
              <Link
                to="/posts"
                className="text-sm text-zinc-400 dark:text-zinc-300 hover:underline"
              >
                Posts
              </Link>
              <span className="text-sm text-zinc-400 dark:text-zinc-300">/</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-100">
                {get.data?.post.title}
              </span>
            </div>

            {/* Post thumbnail/placeholder */}
            <div className="w-full aspect-[3/1] bg-zinc-200 dark:bg-zinc-600 text-zinc-400 dark:text-white rounded-xl relative flex items-center justify-center overflow-hidden transition-colors">
              <Newspaper strokeWidth={1} size={90} />
            </div>

            {/* Post content container */}
            <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
              {/* Post date */}
              <p className="text-xs font-geist-mono font-bold text-zinc-400 dark:text-zinc-300 transition-colors mb-3">
                {moment(get.data?.post.createdAt).format("YYYY MMMM DD")}
              </p>

              {/* Post title */}
              <h1 className="font-black w-full font-geist-mono transition-colors dark:text-white text-2xl my-9">
                {get.data?.post.title}
              </h1>

              {/* Post content rendered as HTML with custom styling */}
              <div
                className="text-sm leading-6 font-medium text-zinc-500 dark:text-white transition-colors flex flex-col items-start justify-start gap-3 [&>blockquote]:border-l-4 [&>blockquote]:border-zinc-300 [&>blockquote]:dark:border-zinc-400 [&>blockquote]:pl-4 [&>blockquote]:py-4 [&>blockquote]:transition-colors [&>h2]:mt-4 [&>h2]:text-xl"
                dangerouslySetInnerHTML={{
                  __html:
                    get.data?.post.fields
                      .find((field) => field.key === "content")
                      ?.value.slice(1, -1) ?? "",
                }}
              />

              <div
                className={twMerge(
                  "relative",
                  (get.isAddingReaction || get.isRemoveingReaction || get.isFetching) &&
                    "animate-pulse"
                )}
              >
                <span
                  className={twMerge(
                    "absolute w-full h-full z-10 opacity-0 ",
                    get.isAddingReaction || get.isRemoveingReaction || get.isFetching
                      ? "visible"
                      : "hidden"
                  )}
                ></span>

                {/* Reaction box */}
                <Reactions
                  clickReaction={(data) => on.handleClickReaction(data.reaction)}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  currentReactions={get.data?.post.reactions!}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  reactionsCount={get.data?.post.reactionsCount!}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
