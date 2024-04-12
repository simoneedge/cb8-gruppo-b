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
      <nav className={styles.navExperiences}>
        <MenuDesk />
        <MenuMobile />

        <div className={styles.textNav}>
          <h1>
            Welcome to your collection of favorite experiences! Here you can
            keep track of all the adventures you've loved the most with us. Add
            the experiences you want to relive over and over again. Each
            experience is a precious piece in your journey of discovery. Keep
            exploring and creating unforgettable memories with us!
          </h1>
        </div>
      </nav>
      <main>
        <h1>Experience</h1>
        <CardList experiences={experiences} />
      </main>
      <Footer />
    </div>
  );
}
