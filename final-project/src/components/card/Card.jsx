import styles from "@/styles/Home.module.scss";
import { IconHeart } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";

const fetchExperiences = async () => {
  const res = await fetch("/api/experiences");
  const data = await res.json();
  return data;
};

const Card = ({ experience }) => {
  return (
    <section className={styles.containerSlider}>
      <div className={styles.box}>
        <div className={styles.boxIconTop}>
          <span>
            <IconStar />
          </span>
          <span>
            <IconHeart />
          </span>
        </div>
        <div className={styles.boxText}>
          <h4>{experience.title}</h4>
          <p>{experience.time.first_slot}</p>
          <p>{experience.geolocation}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;

export const getServerSideProps = async () => {
  const experiences = await fetchExperiences();
  return { props: { experiences } };
};
