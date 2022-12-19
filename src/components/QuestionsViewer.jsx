import React, { useState, useEffect, useMemo } from "react";
import styles from "./QuestionsViewer.module.css";
import Question from "./Question";
import Loader from "./Loader";
import Scoreboard from "./Scoreboard";
import Summary from "./Summary";

export default function QuestionsViewer({ questions, isGameFinished }) {
  const [questionsArray, setQuestionsArray] = useState();
  const [score, setScore] = useState(0);

  useMemo(() => {
    setQuestionsArray(questions);
  }, [questions]);

  const resetQuestions = () => {
    setQuestionsArray(questions); // dev only
  };

  const updateQuestions = (id, isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + questions[0].pointWorth);
    }
    setTimeout(() => {
      // the timeout is here so the transition can play out
      setQuestionsArray((prev) => {
        return prev.filter((item) => {
          return item.id !== id;
        });
      });
    }, 1000);
  };

  return (
    <div className={styles.QuestionsViewer}>
      {isGameFinished && <Summary score={score} />}

      <div className={styles.controls}>
        {!isGameFinished && <Scoreboard score={score} />}
      </div>
      {!isGameFinished && (
        <div className={styles.Questions}>
          {questionsArray && questionsArray.length > 0 ? (
            questionsArray.map((q) => (
              <Question
                updateQuestions={updateQuestions}
                key={q.id}
                questionData={q}
              />
            ))
          ) : (
            <>
              <button className={styles.reset} onClick={resetQuestions}>
                Reset
              </button>
              <Loader />
              {questions.length}
            </>
          )}
        </div>
      )}
    </div>
  );
}
