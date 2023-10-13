import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>LL</div>
      <nav className={styles.navLinks}>
        <Link href="/agendamento">Agendamento</Link>
        <Link href="/advogados">Advogados</Link>
        <div className={styles.userName}>user.name</div>
      </nav>
    </div>
  );
};

export default Navbar;
