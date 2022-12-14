import React, { useState, useEffect } from "react";
import styles from "./Scoreboard.module.css";

export default function Scoreboard({ score }) {
  const [isPulsing, setIsPulsing] = useState(false);
  useEffect(() => {
    console.log("New score", score);
    setIsPulsing(true);
    setTimeout(() => {
      setIsPulsing(false);
    }, 1000);
  }, [score]);

  return (
    <div className={`${styles.Scoreboard} ${isPulsing ? styles.pulsing : ""}`}>
      <span>{score}</span>
    </div>
  );
}
