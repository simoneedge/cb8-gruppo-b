import styles from "../../styles/Card.module.scss";
import { IconHeart, IconHeartFilled, IconMapPin } from "@tabler/icons-react";
import StarsRating from "../starsRating";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Card = ({ experience }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const newfavorites = session?.user?.favorites;

  useEffect(() => {
    if (newfavorites.includes(experience._id)) {
      setIsFavorite(true);
      console.log(session.user.favorites);
    }
  }, []);

  const onHandleFavoriteClick = (e) => {
    e.stopPropagation();
    fetch(`/api/favorites/${session.user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: experience._id }),
    }).then((response) => {
      console.log(response);
    });
    setIsFavorite(!isFavorite);
    newfavorites?.includes(experience._id)
      ? newfavorites.pop(experience._id)
      : newfavorites.push(experience._id);
  };

  if (!experience) {
    return null;
  }

  const onHandleClick = () => {
    router.push(`/experiences/${experience._id}`);
  };

  return (
    <div className={styles.cardBox} onClick={onHandleClick}>
      <div className={styles.cardBoxImage}>
        <Image
          src={experience.pictures[0] && experience.pictures[0]}
          width={1200}
          height={1200}
          alt="experience"
        />
      </div>
      <div className={styles.boxIconTop}>
        <span className={styles.stars}>
          <StarsRating
            rating={experience.rating && experience.rating.$numberDecimal}
          />
        </span>

        {session && (
          <span onClick={onHandleFavoriteClick}>
            {isFavorite ? <IconHeartFilled color="red" /> : <IconHeart />}
          </span>
        )}
      </div>
      <div className={styles.boxText}>
        <h4>{experience.title}</h4>
        <p>{experience.geolocation}</p>

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
