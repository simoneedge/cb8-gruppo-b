import Link from "next/link";
import styles from "../../styles/Menu.module.scss";

const MenuDesk = () => {
  return (
    <div className={styles.MenuDesk}>
      <div className={styles.containerImage}>
        <img src="/logoipsum-331.svg" alt="logo" />
      </div>
      <div className={styles.topMenu}>
        <Link href="/#">Preferiti</Link>
        <Link href="/#">Esperienze</Link>
        <Link href="/#">Profilo</Link>
        <Link href="/#">Contatti</Link>
        <Link href="/#">About Us</Link>
      </div>
    </div>
  );
};

export default MenuDesk;
