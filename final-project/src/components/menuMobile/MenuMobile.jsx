import styles from "../../styles/Menu.module.scss";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconInfoCircle } from "@tabler/icons-react";

const MenuMobile = () => {
  return (
    <div className={styles.menu}>
      <Link href="/home">
        <IconHome />
      </Link>
      <Link href="/aboutUs">
        <IconInfoCircle />
      </Link>
      <Link href="/experiences">
        <IconSailboat />
      </Link>
      <Link href="/#">
        <IconHeart />
      </Link>
      <Link href="/profile">
        <IconUserCircle />
      </Link>
    </div>
  );
};

export default MenuMobile;
