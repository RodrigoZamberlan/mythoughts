import styles from "./styles/ListOfPosts.module.css";
import Post from "./Post.js";

const listOfPosts = ({ posts, handleRemovePost }) => {
  return (
    <>
      {posts.map((post, index) => (
        <li key={index} className={styles.postItem}>
          <Post
            title={post.titleInput}
            content={post.contentInput}
            handleRemovePost={() => {
              handleRemovePost(index);
            }}
          />
        </li>
      ))}
    </>
  );
};

export default listOfPosts;
