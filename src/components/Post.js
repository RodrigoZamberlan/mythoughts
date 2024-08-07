import styles from "./styles/Post.module.css";
import Button from "./Button.js";

const Post = ({ title, content, handleRemovePost }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button text="Delete" handleClick={handleRemovePost}/>
      </div>
    </>
  );
};

export default Post;
