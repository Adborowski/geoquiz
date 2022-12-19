import styles from "./App.module.css";
import { useState, useMemo } from "react";
import QuestionsViewer from "./components/QuestionsViewer";
import { getQuestions } from "./functions";
import MapBackground from "./components/MapBackground";
import Clock from "./components/Clock";
import Scoreboard from "./components/Scoreboard";
import Summary from "./components/Summary";

const App = () => {
  console.log("App Redrawn");
  const [questions, setQuestions] = useState([]);
  const howManyQuestions = 100;
  const difficulty = 5;
  const time = 20;
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useMemo(() => {
    getQuestions(howManyQuestions, difficulty).then((data) => {
      setQuestions(data);
    });
  }, [difficulty]);

  const updateQuestions = (id, isCorrect) => {
    console.log(id, isCorrect);
    if (isCorrect) {
      console.log(questions);
      setScore((prev) => prev + questions[0].pointWorth);
    }
    setTimeout(() => {
      // the timeout is here so the transition can play out
      setQuestions((prev) => {
        return prev.filter((item) => {
          return item.id !== id;
        });
      });
    }, 1000);
  };

  return (
    <div className={styles.App}>
      <MapBackground />

      <Summary score={score} isGameFinished={isGameFinished} />

      {!isGameFinished && (
        <Clock
          time={time}
          handleFinished={() => {
            setIsGameFinished(true);
          }}
        />
      )}
      {!isGameFinished && (
        <QuestionsViewer
          onAnswer={updateQuestions}
          questions={questions}
          isGameFinished={isGameFinished}
        />
      )}
    </div>
  );
};

export default App;
