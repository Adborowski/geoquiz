import styles from "./App.module.css";
import { useState, useEffect, useMemo } from "react";
import QuestionsViewer from "./components/QuestionsViewer";
import Question from "./components/Question";
import { getQuestionData, getQuestions } from "./functions";

const App = () => {
  console.log("App Redrawn");
  const [questionData, setQuestionData] = useState({});
  const [questions, setQuestions] = useState([]);
  let [score, setScore] = useState(0);
  const howManyQuestions = 3;
  const difficulty = 4;

  useMemo(() => {
    getQuestionData(difficulty).then((data) => {
      setQuestionData(data);
    });

    getQuestions(howManyQuestions, difficulty).then((data) => {
      setQuestions(data);
    });
  }, [difficulty]);

  return (
    <div className={styles.App}>
      <QuestionsViewer questions={questions} />
    </div>
  );
};

export default App;
