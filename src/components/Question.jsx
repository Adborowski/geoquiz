import React, { useState, useEffect } from "react";
import styles from "./Question.module.css";

const Question = ({ questionData }) => {
  const { topic, correctCountry, countries } = questionData;
  console.log(topic);
  console.log(correctCountry);
  console.log(countries);

  useEffect(() => {
    console.log("Question data:", questionData);
  }, [questionData]);

  return (
    topic &&
    correctCountry &&
    countries && (
      <div className={styles.Question}>
        <h1> Which country has this {topic}?</h1>
        <section className={styles.subject}>
          {topic == "flag" ? (
            <img
              src={`https://flagcdn.com/${correctCountry.alpha2code.toLowerCase()}.svg`}
            />
          ) : (
            <span>{correctCountry[topic]}</span>
          )}
        </section>

        <section className={styles.answerOptions}>
          {countries &&
            countries.map((country) => (
              <div key={country.name} className={styles.option}>
                {country.name}
              </div>
            ))}
        </section>
      </div>
    )
  );
};

export default Question;
