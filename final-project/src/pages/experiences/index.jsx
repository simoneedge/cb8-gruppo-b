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
            Discover the myriad of experiences waiting for you within our app.
            Take your time to peruse through our curated selection and choose
            the perfect adventure to create your next cherished memory. Whether
            you're seeking culinary delights, cultural explorations, or
            thrilling outdoor escapades, our app has something special just for
            you. Begin your journey of discovery today and let the magic of
            Sicily unfold before your eyes.
          </h1>
        </div>
      </nav>
      <main className={styles.mainExperiences}>
        {/* ***QUI VIENE AGGIUNTA LA SEARCH*** */}
        <div className={styles.containerCardList}>
          <CardList experiences={experiences} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
