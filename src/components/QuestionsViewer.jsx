import React, { useState } from "react";
import styles from "./QuestionsViewer.module.css";
import Question from "./Question";

export default function QuestionsViewer({ questions }) {
  console.log("QuestionsViewer received questions:", questions);
  return (
    <div className={styles.QuestionsViewer}>
      {questions.length > 0
        ? questions.map((q) => <Question key={q.id} questionData={q} />)
        : "loading..."}
    </div>
  );
}