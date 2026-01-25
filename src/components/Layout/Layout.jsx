import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>© 2023 BlogApp. All rights reserved.</footer>
  </div>
);
export default Layout;
