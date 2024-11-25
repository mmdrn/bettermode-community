import moment from "moment";
import usePosts from "../../api/post/list";
import Post from "../../components/post";
import Loading from "../../components/loading";
import { CloudAlert } from "lucide-react";

export default function PostsList() {
  const variables = {
    limit: Number(import.meta.env.VITE_DEFAULT_FETCH_POSTS_LIMIT) || 10,
    spaceIds: import.meta.env.VITE_SPACE_ID?.split(",").filter(Boolean),
    postTypeIds: import.meta.env.VITE_POST_TYPE_ID?.split(",").filter(Boolean),
    orderByString: "publishedAt",
    reverse: true,
    filterBy: [],
  };

  const { data, isFetching, isError, fetchNextPage, hasNextPage } = usePosts(variables);

  return (
    <div className="container mx-auto flex items-center justify-center flex-col">
      {!data ? (
        <Loading className="mt-16" />
      ) : isError ? (
        <p className="text-bettermode-green-primary flex flex-col items-center justify-center w-full gap-2 font-geist-mono font-semibold mt-16">
          <CloudAlert strokeWidth={2.6} size={80} />
          An error occurred while fetching data.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-8">
            {data?.pages.map((page) =>
              page.posts.nodes.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  publishedAt={moment(post.publishedAt).format("YYYY MMMM DD")}
                />
              ))
            )}
          </div>
          {hasNextPage &&
            (isFetching ? (
              <Loading className="mt-16" />
            ) : (
              <button
                onClick={() => !isFetching && fetchNextPage()}
                className="mt-16 px-4 pt-2 pb-2.5 bg-bettermode-green-primary text-white rounded hover:bg-opacity-90"
              >
                Show More
              </button>
            ))}
        </>
      )}
    </div>
  );
}
