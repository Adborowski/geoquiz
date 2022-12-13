import styles from "./App.module.css";
import { useState, useEffect } from "react";

import Question from "./components/Question";
import { getQuestionData } from "./functions";
const App = () => {
  const [questionData, setQuestionData] = useState({});

  const difficulty = 3;
  return (
    <div className={styles.App}>
      <Question difficulty={difficulty} />
    </div>
  );
};

export default App;
