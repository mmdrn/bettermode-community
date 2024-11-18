import React from "react";
import usePosts from "./src/hooks/usePosts";

const PostsComponent = () => {
  const variables = {
    limit: 6,
    spaceIds: ["thL2ugbON9DE"],
    postTypeIds: ["5nOJkd3DYTCpZ1w"],
    orderByString: "publishedAt",
    reverse: false,
    filterBy: [],
  };

  const { data, isLoading, isError } = usePosts(variables);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data!</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data?.posts?.nodes?.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
