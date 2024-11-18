import "./App.css";
import Post from "./components/post";
import usePosts from "./api/posts";

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
  );
}

export default App;
