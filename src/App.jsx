import styles from "./App.module.css";
import { useState, useMemo } from "react";
import QuestionsViewer from "./components/QuestionsViewer";
import { getQuestions } from "./functions";
import MapBackground from "./components/MapBackground";
import Clock from "./components/Clock";

const App = () => {
  console.log("App Redrawn");
  const [questions, setQuestions] = useState([]);
  const howManyQuestions = 100;
  const difficulty = 5;
  const time = 5;
  const [isGameFinished, setIsGameFinished] = useState(false);

  useMemo(() => {
    getQuestions(howManyQuestions, difficulty).then((data) => {
      setQuestions(data);
    });
  }, [difficulty]);

  return (
    <div className={styles.App}>
      <MapBackground />
      <Clock
        time={time}
        handleFinished={() => {
          setIsGameFinished(true);
        }}
      />
      <QuestionsViewer questions={questions} isGameFinished={isGameFinished} />
    </div>
  );
};

export default App;
