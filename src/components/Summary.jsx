import React, { useRef } from "react";
import styles from "./Summary.module.css";
import Scoreboard from "./Scoreboard";

export default function Summary({ score, isGameFinished, submitScore }) {
  const nameInput = useRef(null);
  const handleSubmit = () => {
    console.log(nameInput.current.value);
    submitScore(score, nameInput.current.value);
  };
  return (
    <div
      className={`${styles.Summary} ${isGameFinished ? styles.finished : ""}`}
    >
      <section>
        <span className={styles.scoreText}>Your score</span>
        <Scoreboard score={score} />
        <div className={styles.submitControls}>
          <input ref={nameInput} placeholder={"Your name"}></input>
          <button onClick={handleSubmit}>Submit Score</button>
        </div>
      </section>
    </div>
  );
}
