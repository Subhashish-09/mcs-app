import Link from "next/link";
import styles from "../styles/FlashCard.module.css";

const SideBarFlashCard = ({ cardTitle, cardBottom, cardId }) => {
  return (
    <Link href={"flash-card?ci=" + cardId}>
      <div className="flex justify-between gap-3">
        <div className={styles["SideFlashCard"]}></div>
        <div className="w-64 flex flex-col gap-4">
          <p
            style={{
              wordBreak: "break-word",
              textOverflow: "ellipsis",
            }}
          >
            {68 + " " + cardTitle}
          </p>
          <p>{cardBottom}</p>
        </div>
      </div>
    </Link>
  );
};

export default SideBarFlashCard;
