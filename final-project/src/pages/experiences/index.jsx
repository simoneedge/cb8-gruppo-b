import { useEffect, useState } from "react";
import CardList from "@/components/cardList";
import styles from "../../styles/Experience.module.scss";
import Head from "next/head";

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
    <div className={styles.ExperienceDetail}>
      <Head>
        <title>Experiences</title>
        <meta name="description" content="List of experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Experience</h1>
      <CardList experiences={experiences} />
    </div>
  );
}
