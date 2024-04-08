import Link from "next/link";
import styles from "../../styles/Menu.module.scss";
import Image from "next/image";

const MenuDesk = () => {
  return (
    <div className={styles.MenuDesk}>
      <div className={styles.containerImage}>
        <Image
          src="/logosicily.svg"
          width={100}
          height={100}
          className={styles.logoImage}
          alt="logo"
          priority
        />
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
