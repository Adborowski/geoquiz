import React, { useEffect } from "react";
import styles from "./Question.module.css";
import Loader from "./Loader";

const Question = ({ questionData }) => {
  const { topic, correctCountry, countries } = questionData;

  useEffect(() => {
    console.log("Question data:", questionData);
  }, [questionData]);

  const Options = ({ countries }) => {
    return (
      <section className={styles.answerOptions}>
        {countries &&
          countries.map((country) => (
            <div key={country.name} className={styles.option}>
              {country.name}
            </div>
          ))}
      </section>
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
    <div className={styles.Question}>
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
