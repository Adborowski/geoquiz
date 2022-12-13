import styles from "./App.module.css";
import { useState, useEffect, useMemo } from "react";
import Question from "./components/Question";
import { getQuestionData } from "./functions";

const App = () => {
  console.log("App Redrawn");
  const [questionData, setQuestionData] = useState({});
  const difficulty = 4;

  useMemo(() => {
    getQuestionData(4).then((data) => {
      setQuestionData(data);
    });
  }, [difficulty]);

  return (
    <div className={styles.App}>
      <Question questionData={questionData} />
    </div>
  );
};

export default App;
