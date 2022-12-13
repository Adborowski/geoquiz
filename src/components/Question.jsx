import React, { useEffect, useState } from "react";
import styles from "./Question.module.css";
import Loader from "./Loader";

const Question = ({ questionData }) => {
  const { topic, correctCountry, countries } = questionData;
  const [isCorrect, setIsCorrect] = useState();
  const [answer, setAnswer] = useState(false);

  const handleAnswer = (answerCode) => {
    console.log(answerCode, correctCountry.alpha2code);
    setAnswer(answerCode);
    if (answerCode == correctCountry.alpha2code) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const Options = ({ countries }) => {
    return (
      <section className={styles.answerOptions}>
        {countries &&
          countries.map((country) => (
            <Option answer={answer} key={country.name} country={country} />
          ))}
      </section>
    );
  };

  const Option = ({ answer, country }) => {
    return (
      <div
        onClick={() => {
          handleAnswer(country.alpha2code);
        }}
        key={country.name}
        className={`
          ${styles.option} 
          ${
            answer && country.alpha2code == correctCountry.alpha2code
              ? styles.correct
              : ""
          }
          `}
      >
        {country.name}
      </div>
    );
  };

  const Subject = ({ topic, correctCountry }) => (
    <section className={styles.subject}>
      {topic == "flag" ? (
        <img src={correctCountry.flagURL} />
      ) : (
        <span>{correctCountry[topic]}</span>
      )}
    </section>
  );

  return topic && correctCountry && countries ? (
    <div
      className={`${styles.Question} 
      ${answer && !isCorrect ? styles.failed : ""}
      ${answer && isCorrect ? styles.completed : ""}
      `}
    >
      <h1> Which country has this {topic}?</h1>
      <Subject topic={topic} correctCountry={correctCountry} />
      <Options countries={countries} />
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default Question;
