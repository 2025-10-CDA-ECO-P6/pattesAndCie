import styles from './Nav.module.css';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from 'next/link';


export default function Nav() {

  return (
    <nav className={styles["mobile-nav"]}>
      <Link href="/">
        <FaHome className="text-purple-600 hover:text-purple-400 cursor-pointer" size={24} />
      </Link>
      <FaUser href="/profile"></FaUser>
      <FaCog href="/settings"></FaCog>
      <FaSignOutAlt href="/logout"></FaSignOutAlt>
    </nav>
  );
}