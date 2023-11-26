"use client";

import { useState } from "react";

const FlashCard = ({ FlashCardFront, FlashCardBack }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`m-12  ${flip ? "FlashCardFlip" : "FlashCard"}`}
      style={{ height: 100 }}
      onClick={() => setFlip(!flip)}
    >
      <div className="FlashCardFront">{FlashCardFront}</div>
      <div className="FlashCardBack">{FlashCardBack}</div>
    </div>
  );
};

export default FlashCard;
