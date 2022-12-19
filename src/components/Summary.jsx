import React from "react";
import styles from "./Summary.module.css";
import Scoreboard from "./Scoreboard";

export default function Summary({ score, isGameFinished }) {
  return (
    <div
      className={`${styles.Summary} ${isGameFinished ? styles.finished : ""}`}
    >
      <section>
        <span className={styles.scoreText}>Your score</span>
        <Scoreboard score={score} />
      </section>
    </div>
  );
}
