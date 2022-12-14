import styles from "./App.module.css";
import { useState, useMemo } from "react";
import QuestionsViewer from "./components/QuestionsViewer";
import { getQuestions } from "./functions";
import MapBackground from "./components/MapBackground";

const App = () => {
  console.log("App Redrawn");
  const [questions, setQuestions] = useState([]);
  const howManyQuestions = 100;
  const difficulty = 5;

  useMemo(() => {
    getQuestions(howManyQuestions, difficulty).then((data) => {
      setQuestions(data);
    });
  }, [difficulty]);

  return (
    <div className={styles.App}>
      <MapBackground />
      <QuestionsViewer questions={questions} />
    </div>
  );
};

export default App;
