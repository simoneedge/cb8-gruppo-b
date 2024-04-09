import Link from "next/link";
import styles from "../../styles/Menu.module.scss";
import Image from "next/image";

const MenuDesk = () => {
  return (
    <div className={styles.MenuDesk}>
      <div className={styles.containerImage}>
        <Image
          src="/logoBianco.svg"
          width={100}
          height={100}
          className={styles.logoImage}
          alt="logo"
          priority
        />
      </div>
      <div className={styles.topMenu}>
        <Link href="/#">Favorites</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/#">Profile</Link>
        <Link href="/#">About Us</Link>
      </div>
    </div>
  );
};

export default MenuDesk;
