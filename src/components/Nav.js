import styles from './Nav.module.css';

export default function Nav() {

  return (
    <nav className={styles["mobile-nav"]}>
      <a href="/">Accueil</a>
      <a href="/search">Recherche</a>
      <a href="/profile">Profil</a>
    </nav>
  );
}