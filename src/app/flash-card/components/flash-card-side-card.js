import Link from "next/link";
import styles from "../styles/FlashCard.module.css";

const SideBarFlashCard = ({ cardTitle, cardBottom, cardId }) => {
  return (
    <Link href={"flash-card?ci=" + cardId}>
      <div className="flex gap-3 mb-[24px]">
        <div className={styles["SideFlashCard"]}></div>
        <div className="w-64 flex flex-col gap-4">
          <span className={styles["SideFlashCardTitle"]}>
            {68 + " " + cardTitle}
          </span>
          <p>{cardBottom}</p>
        </div>
      </div>
    </Link>
  );
};

export default SideBarFlashCard;
