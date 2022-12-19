import React, { useRef, useState } from "react";
import styles from "./Summary.module.css";
import Scoreboard from "./Scoreboard";
import HighScores from "./HighScores";

export default function Summary({
  score,
  isGameFinished,
  submitScore,
  scores,
}) {
  const [isScoreSubmitted, setIsScoreSubmitted] = useState(false);
  const [username, setUsername] = useState();
  const nameInput = useRef(null);
  const handleSubmit = () => {
    submitScore(score, nameInput.current.value);
    setIsScoreSubmitted(true);
    setUsername(nameInput.current.value);
  };
  return (
    <div
      className={`${styles.Summary} ${isGameFinished ? styles.finished : ""}`}
    >
      <section>
        <span className={styles.scoreText}>Your score</span>
        <Scoreboard score={score} />
        {!isScoreSubmitted && (
          <div className={styles.submitControls}>
            <input ref={nameInput} placeholder={"Your name"}></input>
            <button onClick={handleSubmit}>Submit Score</button>
          </div>
        )}
        {isScoreSubmitted && <HighScores username={username} scores={scores} />}
      </section>
    </div>
  );
}
