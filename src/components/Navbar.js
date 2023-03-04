import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.Navbar}>
      <ul className={styles.NavbarList}>
        <li className={styles.NavbarListItem}>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? styles.NavbarLinkActive
                : styles.NavbarLink
            }
          >
            <h5>Home</h5>
          </Link>
        </li>
        <li className={styles.NavbarListItem}>
          <Link
            to="/todoapp"
            className={
              location.pathname === "/todoapp"
                ? styles.NavbarLinkActive
                : styles.NavbarLink
            }
          >
            <h5>TodoApp</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
