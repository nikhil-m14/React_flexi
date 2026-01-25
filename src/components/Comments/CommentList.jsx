import Comment from "./Comment";
import styles from "./CommentList.module.css";

const CommentList = ({ comments }) => (
  <div className={styles.list}>
    {comments.map((c,i)=>(<Comment key={i} {...c} />))}
  </div>
);
export default CommentList;
