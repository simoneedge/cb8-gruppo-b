import styles from "@/styles/Home.module.scss";
import { IconHeart } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";

const Card = ({ experience }) => {
  if (!experience) {
    return null;
  }
  return (
    <section className={styles.containerSlider}>
      <div className={styles.box}>
        <div className={styles.boxIconTop}>
          <span>
            <IconStar />
            {experience.rating && experience.rating.$numberDecimal}
          </span>
          <span>
            <IconHeart />
          </span>
        </div>
        <div className={styles.boxText}>
          <h4>{experience.title}</h4>
          <p>{experience.time[0].first_slot}</p>
          <p>{experience.geolocation}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
