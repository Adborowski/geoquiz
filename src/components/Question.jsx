import React, { useState, useEffect } from "react";
import { getQuestionData } from "../functions";
import styles from "./Question.module.css";

const Question = ({ difficulty }) => {
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    getQuestionData(difficulty).then((data) => {
      setQuestionData(data);
    });
  }, []);

  return <div className={styles.Question}>{questionData.topic}</div>;
};

export default Question;
