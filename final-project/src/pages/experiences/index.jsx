import { useEffect, useState } from "react";
import CardList from "@/components/cardList";
import styles from "../../styles/Experience.module.scss";

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
      <h1>Experience</h1>
      <CardList experiences={experiences} />
    </div>
  );
}
