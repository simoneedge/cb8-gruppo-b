import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/Profile.module.scss";
import Image from "next/image";
import MenuDesk from "@/components/menuDesk";
import MenuMobile from "@/components/menuMobile";
import Footer from "@/components/footer";

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
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <MenuDesk />
        <MenuMobile />
      </nav>
      <main className={styles.infoProfile}>
        <Image
          src="/organiz.png"
          width={100}
          height={100}
          alt="user profile picture"
        />
        <div className={styles.session}>
          {session ? (
            <div className={styles.sessionContainer}>
              <p className={styles.textName}>
                Welcome {session.user.username}!
              </p>
              <button className={styles.btnMenu} onClick={() => signOut()}>
                Sign Out
              </button>
            </div>
          ) : (
            <div className={styles.containerBtn}>
              <button className={styles.btnMenu} onClick={() => signIn()}>
                Sign In
              </button>
            </div>
          )}
        </div>

        <div className={styles.infoName}>
          <h2>
            {user.name} {user.lastname}
          </h2>
        </div>
        <p className={styles.username}>{user.username}</p>
        <p className={styles.email}>{user.email}</p>
      </main>
      <section className={styles.bookings}>
        <h4 className={styles.title}>Bookings made: none</h4>
      </section>
      <Footer />
    </div>
  );
}
