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
  const handleSubmit = () => {
    submitScore(score, username);
    setIsScoreSubmitted(true);
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
            <form>
              <input
                maxLength={20}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder={"Your name"}
              ></input>
              <button
                type={"submit"}
                disabled={!username}
                onClick={handleSubmit}
              >
                Submit Score
              </button>
            </form>
          </div>
        )}
        {isScoreSubmitted && <HighScores username={username} scores={scores} />}
      </section>
    </div>
  );
}
