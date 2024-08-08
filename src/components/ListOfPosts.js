import styles from "./styles/ListOfPosts.module.css";
import Post from "./Post.js";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext.js";

const ListOfPosts = () => {
  const { listOfPosts, filteredListOfPosts, hasResults, handleRemovePost } = useContext(PostContext);
  const posts = filteredListOfPosts && filteredListOfPosts.length > 0 ? filteredListOfPosts : listOfPosts;
  
  if (listOfPosts && listOfPosts.length === 0) {
    return(<p>No post's yet, go ahead and write one</p>);
  }
  
  if (!hasResults) {
    return(<p>No results</p>)
  }

  return (
    <>
      {filteredListOfPosts.length > 0 && hasResults && <p>Showing {posts.length} {posts.length > 1 ? "results" : "result"}:</p>}
      <ul class={styles.container}>
        {hasResults && posts.map((post, index) => (
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
      </ul>
    </>
  );
};

export default ListOfPosts;
