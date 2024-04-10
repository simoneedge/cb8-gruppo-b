import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import styles from "../../styles/Profile.module.scss";
import Image from "next/image";

export default function Profile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      fetch(`/api/user/${session.user.id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [session]);

  if (!user) return null;

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
          <h2>
            {user.name} {user.lastname}
          </h2>
        </div>
        <p className={styles.username}>{user.username}</p>
        <p className={styles.email}>{user.email}</p>
      </div>
      <h4 className={styles.title}>Bookings made</h4>
    </div>
  );
}
