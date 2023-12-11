"use client";

import { useEffect, useState } from "react";
import styles from "../styles/FlashCard.module.css";
import SideBarFlashCard from "./flash-card-side-card";
import { Button } from "@nextui-org/react";

const FlashCard = ({ FlashCards, ci }) => {
  const [flip, setFlip] = useState(false);
  const [flashCards, setFlashCards] = useState(
    FlashCards[0]["flash_card_content"]
  );
  const [currentFCNo, setCurrentFCNo] = useState(0);
  const [currentFlashCard, setCurrentFlashCard] = useState(flashCards[0]);

  useEffect(() => {
    setCurrentFlashCard(flashCards[currentFCNo]);
    setFlip(false);
  }, [currentFCNo]);

  useEffect(() => {
    setFlashCards(FlashCards[1]["flash_card_content"]);
    setCurrentFlashCard(FlashCards[1]["flash_card_content"][0]);
  }, [ci]);

  return (
    <div className="mx-16 my-20 grid grid-cols-12 gap-14">
      <div className=" col-span-7">
        <div
          className={flip ? styles["FlashCardFlip"] : styles["FlashCard"]}
          onClick={() => setFlip(!flip)}
        >
          <div className={styles["FlashCardFront"]}>
            {currentFlashCard["FlashCardFront"]}
          </div>
          <div className={styles["FlashCardBack"]}>
            {currentFlashCard["FlashCardBack"]}
          </div>
        </div>

        <div className="flex  justify-between mt-4">
          <Button
            fullWidth
            type="button"
            disabled={currentFCNo === 0}
            onClick={() => {
              setCurrentFCNo((prev) => (prev -= 1));
            }}
          >
            Previous
          </Button>

          <Button
            fullWidth
            type="button"
            onClick={() => {
              setCurrentFCNo((prev) =>
                prev + 1 === flashCards.length ? 0 : (prev += 1)
              );
            }}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="col-span-5 h-max">
        {FlashCards?.filter((e) => e.flash_card_id !== ci).map((fc) => (
          <SideBarFlashCard
            cardId={fc.flash_card_id}
            cardTitle={"1111111111111111111111111111111"}
            cardBottom={"12 FlashCards"}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashCard;
