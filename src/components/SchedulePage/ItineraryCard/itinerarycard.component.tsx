import React from "react";
import styles from "./itinierarycard.module.scss";
import { itinerary, months } from "../../../models/itinerary";

interface CardProps {
  itinerary: itinerary;
  onClick?: () => void;
}

const ItineraryCard: React.FC<CardProps> = ({ itinerary, onClick }) => {
  return (
    <div
      className={`${styles.card}`}
      onClick={(e): void => {
        e.persist();
        // Explicitly checking if onClick exists before calling
        if (onClick != null) {
          onClick();
        }
      }}
    >
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>
          {months[itinerary.month - 1] + " " + itinerary.day}
        </h2>
        <p className={styles.card__description}>
          {/* Explicitly check for nullish values for the title */}
          {itinerary.title != null ? (
            <h1>{itinerary.title}</h1>
          ) : (
            <h1>Itinerary</h1>
          )}
        </p>
      </div>
    </div>
  );
};

export default ItineraryCard;
