import { useState } from "react";
import styles from "./CommentForm.module.css";

const CommentForm = ({ onSubmit }) => {
  const [name,setName]=useState("");
  const [text,setText]=useState("");

  const submit=e=>{
    e.preventDefault();
    if(!name||!text) return;
    onSubmit({name,text,date:new Date()});
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <label>Name</label>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <label>Comment</label>
      <textarea value={text} onChange={e=>setText(e.target.value)} />
      <button type="submit">Post Comment</button>
    </form>
  );
};
export default CommentForm;
