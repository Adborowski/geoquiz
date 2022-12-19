import React from "react";
import styles from "./Summary.module.css";
import Scoreboard from "./Scoreboard";

export default function Summary({ score }) {
  return (
    <div className={styles.Summary}>
      <span className={styles.scoreText}> Well done! Your score:</span>
      <Scoreboard score={score} />
    </div>
  );
}
