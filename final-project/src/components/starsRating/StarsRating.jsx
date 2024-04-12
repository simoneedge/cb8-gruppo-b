import styles from "../../styles/StarsRating.module.scss";

const StarsRating = ({ rating }) => {
  return <div className={styles.Stars} style={{ "--rating": rating }}></div>;
};

export default StarsRating;
