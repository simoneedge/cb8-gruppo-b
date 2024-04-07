import styles from "../../styles/Profile.module.scss";
import Image from "next/image";

export default function Profile() {
  return (
    <div className={styles.Profile}>
      <div className={styles.infoProfile}>
        <Image
          src="/organiz.png"
          width={100}
          height={100}
          alt="user profile picture"
        />
        <div className={styles.infoName}>
          <h2>Nome Cognome</h2>
        </div>
        <p className={styles.username}>Username</p>
        <p className={styles.email}>Email</p>
        <p className={styles.location}>Location??</p>
        <p className={styles.password}>Password</p>
      </div>
      <h4 className={styles.title}>Bookings made</h4>
    </div>
  );
}
