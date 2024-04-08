import styles from "../../styles/Menu.module.scss";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";

const MenuMobile = () => {
  return (
    <div className={styles.menu}>
      <Link href="/#">
        <IconHome />
      </Link>
      <Link href="/experience">
        <IconSailboat />
      </Link>
      <Link href="/#">
        <IconHeart />
      </Link>
      <Link href="/#">
        <IconUserCircle />
      </Link>
    </div>
  );
};

export default MenuMobile;
