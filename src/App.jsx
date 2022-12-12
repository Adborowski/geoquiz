import styles from "./App.module.css";
import { useState, useEffect, useRef } from "react";
import { getRandomCountry } from "./CountriesList";
import { getTopic } from "./TopicsList";

function App() {
  const [roundCountries, setRoundCountries] = useState([]);
  const [roundTopic, setRoundTopic] = useState();
  const [question, setQuestion] = useState({});
  const [flag, setFlag] = useState();
  const [flagLoaded, setFlagLoaded] = useState(false);

  const flagRef = useRef();

  const countriesInRound = 4;
  useEffect(() => {
    // pick topic for the round
    setRoundTopic(getTopic());

    // pick countries for the round
    if (roundCountries.length < countriesInRound) {
      for (let i = 1; i <= countriesInRound; i++) {
        setRound();
      }
    }
  }, []);

  useEffect(() => {
    console.log(roundCountries);
  }, [roundCountries]);

  useEffect(() => {
    if (roundCountries.length == countriesInRound && roundTopic) {
      const question = { topic: roundTopic };
      question.correctCountry =
        roundCountries[Math.floor(Math.random() * roundCountries.length)];

      question.content = question.correctCountry[roundTopic];
      console.log(question);
      setQuestion(question);
    }
  }, [roundCountries, roundTopic]);

  useEffect(() => {
    if (question.correctCountry) {
      console.log("Question ready!");
      setFlag(
        `https://countryflagsapi.com/png/${question.correctCountry.alpha2code}`
      );
    }
  }, [question]);

  // FETCH request options
  const myHeaders = new Headers();
  myHeaders.append("apikey", "T3mDSdb6OhyhG3hvjLch3XTizzZAaDBA");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const getCountryData = async (countryCode) => {
    const response = await fetch(
      `https://api.apilayer.com/geo/country/code/${countryCode}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  };

  const setRound = async () => {
    const countryCode = await getRandomCountry()[0];
    const country = await getCountryData(countryCode);
    setRoundCountries((prevState) => {
      return [...prevState, country];
    });
  };

  const handleResponse = (code) => {
    console.log(code);
  };

  return (
    <div className={styles.App}>
      {roundCountries.length != countriesInRound ? <div>Loading...</div> : ""}
      <div className={styles.question}>
        Which country has this {roundTopic}?
        <section>
          {roundTopic == "flag" ? (
            <div ref={flagRef} className={styles.flag}>
              <img
                src={flag}
                onLoad={() => {
                  console.log("loaded");
                  setFlagLoaded(true);
                }}
              />
              {!flagLoaded && (
                <img className={styles.loader} src="/loading.gif" />
              )}
            </div>
          ) : (
            // question topic is not flag
            <span>{question.content}</span>
          )}
        </section>
      </div>
      <div className={styles.countries}>
        {roundCountries.map((land) => {
          return (
            <div
              onClick={() => {
                handleResponse(land.alpha2code);
              }}
              key={land.name}
              className={styles.country}
            >
              {land.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
