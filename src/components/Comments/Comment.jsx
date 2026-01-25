import styles from "./Comment.module.css";
const Comment = ({ name, date, text }) => (
  <div className={styles.comment}>
    <div className={styles.name}>{name}</div>
    <div className={styles.date}>{new Date(date).toLocaleString()}</div>
    <p className={styles.text}>{text}</p>
  </div>
);
export default Comment;
