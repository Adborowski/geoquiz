import React from "react";
import styles from "./HighScores.module.css";

export default function HighScores({ scores, username }) {
  console.log(scores);
  return (
    <div className={styles.HighScores}>
      {scores.map((score, index) => (
        <div
          key={score.id}
          className={`${styles.highScore} ${
            username == score.name ? styles.own : ""
          }`}
        >
          <span>{index + 1}</span>
          <span>{score.name}</span>
          <span>{score.score}</span>
        </div>
      ))}
    </div>
  );
}
