import { useState } from "react";
import CommentList from "../components/Comments/CommentList";
import CommentForm from "../components/Comments/CommentForm";
import SearchBar from "../components/Search/SearchBar";

const postsData = [
  { title: "First Post", content: "Hello world", date: "2023-01-01" },
  { title: "React Blog", content: "Learning React", date: "2023-02-01" }
];

const Blog = () => {
  const [comments,setComments]=useState([]);
  const [query,setQuery]=useState("");

  const filtered = postsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {filtered.map((p,i)=>(
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <small>{p.date}</small>
        </div>
      ))}
      <CommentList comments={comments} />
      <CommentForm onSubmit={c=>setComments([...comments,c])} />
    </div>
  );
};
export default Blog;
