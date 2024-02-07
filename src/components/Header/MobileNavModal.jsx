import { Link } from "react-router-dom";
import styles from "./mobileNavModal.module.css";

export default function MobileNavModal({ show, onCloseMobileNavModal }) {
  return (
    <div show={show}>
      <div className={styles.backdrop} onClick={onCloseMobileNavModal}></div>
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavItems}>
          <li className={styles.mobileNavItem}>
            <Link to={"/"} onClick={onCloseMobileNavModal}>
              Home
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to={"/artworks"} onClick={onCloseMobileNavModal}>
              Artworks
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to={"/about"} onClick={onCloseMobileNavModal}>
              About me
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to={"/contact"} onClick={onCloseMobileNavModal}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
