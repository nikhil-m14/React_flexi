import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [q,setQ]=useState("");
  return (
    <input className={styles.search} placeholder="Search posts..." value={q} aria-label="Search posts"
      onChange={e=>{setQ(e.target.value);onSearch(e.target.value);}} />
  );
};
export default SearchBar;
