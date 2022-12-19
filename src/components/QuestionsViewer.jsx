import React, { useState, useEffect, useMemo } from "react";
import styles from "./QuestionsViewer.module.css";
import Question from "./Question";
import Loader from "./Loader";
import Scoreboard from "./Scoreboard";
import Summary from "./Summary";

export default function QuestionsViewer({
  questions,
  isGameFinished,
  onAnswer,
}) {
  const [questionsArray, setQuestionsArray] = useState(questions);

  useMemo(() => {
    setQuestionsArray(questions);
  }, [questions]);

  return (
    <div className={styles.QuestionsViewer}>
      <div className={styles.controls}></div>

      {!isGameFinished && (
        <div className={styles.Questions}>
          {questionsArray && questionsArray.length > 0 ? (
            questionsArray.map((q) => (
              <Question
                updateQuestions={onAnswer}
                key={q.id}
                questionData={q}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
}
