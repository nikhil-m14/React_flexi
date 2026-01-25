import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>BlogApp</Link>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <button className={styles.hamburger} onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/blog" onClick={()=>setOpen(false)}>Blog</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
