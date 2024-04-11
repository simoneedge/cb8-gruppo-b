import styles from "./StarsRating.module.scss";

const StarsRating = ({ rating }) => {
  return <div className={styles.Stars} style={{ "--rating": rating }}></div>;
};

export default StarsRating;
