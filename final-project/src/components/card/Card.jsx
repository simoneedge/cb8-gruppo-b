import styles from "../../styles/Card.module.scss";
import { IconHeart, IconHeartFilled, IconMapPin } from "@tabler/icons-react";
import StarsRating from "../starsRating";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const Card = ({ experience }) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  if (!experience) {
    return null;
  }

  const onHandleClick = () => {
    router.push(`/experiences/${experience._id}`);
  };

  const onHandleFavoriteClick = (e) => {
    e.stopPropagation();

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.cardBox} onClick={onHandleClick}>
      <div className={styles.cardBoxImage}>
        <Image
          src="/images/Events/exp1/4.webp"
          width={1000}
          height={1000}
          alt="experience"
        />
      </div>
      <div className={styles.boxIconTop}>
        <span className={styles.stars}>
          <StarsRating
            rating={experience.rating && experience.rating.$numberDecimal}
          />
        </span>
        <span onClick={onHandleFavoriteClick}>
          {isFavorite ? (
            <IconHeartFilled size={28} color="red" />
          ) : (
            <IconHeart size={28} />
          )}
        </span>
      </div>
      <div className={styles.boxText}>
        <h4>{experience.title}</h4>
        <p>{experience.time[0].first_slot}</p>
        <div className={styles.containerCity}>
          <span className={styles.iconCity}>
            <IconMapPin />
          </span>
          <p className={styles.city}>{experience.geolocation}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
