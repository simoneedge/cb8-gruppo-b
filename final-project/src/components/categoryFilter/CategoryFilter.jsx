import { useState } from "react";
import { IconPizza } from "@tabler/icons-react";
import { IconSunHigh } from "@tabler/icons-react";
import { IconWaterpolo } from "@tabler/icons-react";
import { IconMusic } from "@tabler/icons-react";
import styles from "./index.module.scss";

const CategoryFilter = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onHandleClick = (category) => {
    // Se la categoria selezionata è già attiva nel filtro
    // si annulla il filtro per categoria
    if (category === selectedCategory) {
      setSelectedCategory(null);
      onFilter(null);
    } else {
      setSelectedCategory(category);
      onFilter(category);
    }
  };

  return (
    <div>
      <IconPizza
        onClick={() => onHandleClick("Food")}
        className={`${styles.icon} ${
          selectedCategory === "Food" ? styles["icon-selected"] : ""
        }`}
      />
      <IconSunHigh
        onClick={() => onHandleClick("Openair")}
        className={`${styles.icon} ${
          selectedCategory === "Openair" ? styles["icon-selected"] : ""
        }`}
      />
      <IconWaterpolo
        onClick={() => onHandleClick("Wellness")}
        className={`${styles.icon} ${
          selectedCategory === "Wellness" ? styles["icon-selected"] : ""
        }`}
      />
      <IconMusic
        onClick={() => onHandleClick("Events")}
        className={`${styles.icon} ${
          selectedCategory === "Events" ? styles["icon-selected"] : ""
        }`}
      />
    </div>
  );
};

export default CategoryFilter;
