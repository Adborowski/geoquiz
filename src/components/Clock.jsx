import React, { useState, useEffect, useMemo } from "react";
import styles from "./Clock.module.css";

// time in seconds
export default function Clock({ time, handleFinished }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (timeLeft == 0) {
      handleFinished();
    }
  }, [timeLeft]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev >= 1) {
          return prev - 1;
        } else {
          return null;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className={`${styles.Clock} ${!timeLeft ? styles.hidden : ""}`}>
      <span>{timeLeft}</span>
    </div>
  );
}
