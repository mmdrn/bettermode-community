import "./App.css";
import PostsComponent from "./postscom";
import Post from "./src/components/Post";
import usePosts from "./src/hooks/usePosts";

function App() {
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
    <>
      <div>
        <PostsComponent />
        <div className="border-b p-2 mb-6">
          <div className="container mx-auto">
            <h1 className="font-bold text-2xl font-mono inline-flex items-center justify-start gap-3">
              <span className="text-3xl w-11 h-11 rounded-md bg-blue-500 flex items-center justify-center">
                🥸
              </span>
              Bettermode Community
            </h1>
          </div>
        </div>

        <div>
          <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-8">
              {data &&
                data.posts.nodes.map((post) => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
