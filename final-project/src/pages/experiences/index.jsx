import styles from "../../styles/Experiences.module.scss";
import { useEffect, useState } from "react";
import CardList from "@/components/cardList";

import Head from "next/head";
import MenuDesk from "@/components/menuDesk";
import MenuMobile from "@/components/menuMobile";
import Footer from "@/components/footer";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/experiences");
      const data = await res.json();

      setExperiences(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.Experiences}>
      <Head>
        <title>Experiences</title>
        <meta name="description" content="List of experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <MenuDesk />
        <MenuMobile />
      </nav>
      <main>
        <h1>Experience</h1>
        <CardList experiences={experiences} />
      </main>
      <Footer />
    </div>
  );
}
