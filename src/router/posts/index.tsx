import moment from "moment";
import usePosts from "../../api/post/list";
import Post from "../../components/post";
import { CloudAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import Loading from "../../components/loading";

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
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isError) fetchNextPage();
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

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
          <div ref={observerRef}>
            {isFetching && hasNextPage && <Loading className="mt-10 mb-5" />}
          </div>
        </>
      )}
    </div>
  );
}
