import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postSlice";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <h1>List of posts</h1>
      {loading
        ? "Loading ..."
        : posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
    </>
  );
};

export default Posts;
