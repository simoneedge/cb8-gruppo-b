import styles from "./index.module.scss";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import StarsRating from "../starsRating";
import { useRouter } from "next/router";
import { useState } from "react";

const Card = ({ experience, style }) => {
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
    <div className={styles.box} onClick={onHandleClick} style={style}>
      <div className={styles.boxIconTop}>
        <span>
          <StarsRating
            rating={experience.rating && experience.rating.$numberDecimal}
          />
        </span>
        <span onClick={onHandleFavoriteClick}>
          {isFavorite ? <IconHeartFilled /> : <IconHeart />}
        </span>
      </div>
      <div className={styles.boxText}>
        <h4>{experience.title}</h4>
        <p>{experience.time[0].first_slot}</p>
        <p>{experience.geolocation}</p>
      </div>
    </div>
  );
};

export default Card;
