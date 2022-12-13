import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Question from "./components/Question";
import { getQuestionData } from "./functions";

const App = () => {
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    getQuestionData(difficulty).then((data) => {
      setQuestionData(data);
    });
  }, []);

  const difficulty = 3;
  return (
    <div className={styles.App}>
      <Question questionData={questionData} />
    </div>
  );
};

export default App;
