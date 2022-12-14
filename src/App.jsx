import styles from "./App.module.css";
import { useState, useMemo } from "react";
import QuestionsViewer from "./components/QuestionsViewer";
import { getQuestionData, getQuestions } from "./functions";

const App = () => {
  console.log("App Redrawn");
  const [questionData, setQuestionData] = useState({});
  const [questions, setQuestions] = useState([]);
  const howManyQuestions = 100;
  const difficulty = 5;

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
