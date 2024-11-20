import moment from "moment";
import usePosts from "../../api/posts";
import Post from "../../components/post";
import { CloudAlert, LoaderCircle } from "lucide-react";

export default function Home() {
  const variables = {
    limit: Number(import.meta.env.VITE_DEFAULT_FETCH_POSTS_LIMIT),
    spaceIds: [import.meta.env.VITE_SPACE_ID],
    postTypeIds: [import.meta.env.VITE_POST_TYPE_ID],
    orderByString: "publishedAt",
    reverse: false,
    filterBy: [],
  };

  const { data, isLoading, isError } = usePosts(variables);

  return (
    <div className="container mx-auto flex items-center justify-center">
      {isLoading ? (
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
        <div className="grid grid-cols-4 gap-8">
          {data &&
            data.posts.nodes.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                publishedAt={moment(post.publishedAt).format("YYYY MMMM DD")}
              />
            ))}
        </div>
      )}
    </div>
  );
}
