"use client";

import { useState } from "react";
import styles from "../styles/FlashCard.module.css";

const FlashCard = ({ FlashCardFront, FlashCardBack }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`m-12  ${
        flip ? styles["FlashCardFlip"] : styles["FlashCard"]
      }`}
      style={{ height: 100 }}
      onClick={() => setFlip(!flip)}
    >
      <div className={styles["FlashCardFront"]}>{FlashCardFront}</div>
      <div className={styles["FlashCardBack"]}>{FlashCardBack}</div>
    </div>
  );
};

export default FlashCard;
