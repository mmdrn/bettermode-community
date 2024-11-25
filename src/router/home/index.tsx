import moment from "moment";
import usePostsList from "../../api/post/list";
import Post from "../../components/post";
import { CloudAlert, LoaderCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const variables = {
    limit: Number(import.meta.env.VITE_DEFAULT_FETCH_POSTS_LIMIT) || 10,
    spaceIds: import.meta.env.VITE_SPACE_ID?.split(",").filter(Boolean),
    postTypeIds: import.meta.env.VITE_POST_TYPE_ID?.split(",").filter(Boolean),
    orderByString: "publishedAt",
    reverse: true,
    filterBy: [],
  };

  const { data, isLoading, isFetching, isError, fetchNextPage, hasNextPage } = usePostsList(variables);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading && !isError) fetchNextPage();
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
        <p className="text-bettermode-green-primary flex items-center justify-center w-full gap-2 font-geist-mono font-semibold mt-16">
          <LoaderCircle className="animate-spin" strokeWidth={2.6} size={30} />
          Loading data...
        </p>
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
            {(isLoading || isFetching) && hasNextPage && (
              <div className="col-span-4 flex justify-center mt-6">
                <p className="text-bettermode-green-primary flex items-center justify-center w-full gap-2 font-geist-mono font-semibold">
                  <LoaderCircle className="animate-spin" strokeWidth={2.6} size={30} />
                  Loading data...
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
