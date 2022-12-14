import React, { useState, useEffect, useMemo } from "react";
import styles from "./QuestionsViewer.module.css";
import Question from "./Question";
import Loader from "./Loader";

export default function QuestionsViewer({ questions }) {
  console.log("QuestionsViewer received questions:", questions);

  const [questionsArray, setQuestionsArray] = useState();

  useMemo(() => {
    setQuestionsArray(questions);
  }, [questions]);

  const updateQuestions = (id) => {
    setTimeout(() => {
      // the timeout is here so the transition can play out
      setQuestionsArray((prev) => {
        return prev.filter((item) => {
          return item.id !== id;
        });
      });
    }, 2000);
  };

  useEffect(() => {
    console.log("questions updated:", questionsArray);
  }, [questionsArray]);

  return (
    <div className={styles.QuestionsViewer}>
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
            <Loader />
            {questions.length}
          </>
        )}
      </div>
    </div>
  );
}
