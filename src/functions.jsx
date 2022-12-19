import { getTopic } from "./TopicsList";
import { getCountryCode } from "./CountriesList";

const address = "http://178.128.198.24:3000/api/";
// const address = "localhost:3000/api";
const getAllCountries = async () => {
  const response = await fetch(address, {
    mode: "cors",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

export const submitScore = async (score, name) => {
  console.log("Trying to submit", name, score);
  const payload = { name: name, score: score };
  const response = await fetch(address + "submitScore", {
    mode: "cors",
    method: "POST",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("RESPONSE:", data);
  return data;
};

const countries = await getAllCountries();

const getCountryData = (countryCode) => {
  const data = countries[countryCode];
  return data;
};

const getUniqueCodes = (codesCount) => {
  let uniqueCodes = [];
  while (uniqueCodes.length < codesCount) {
    const randomCode = getCountryCode();
    if (!uniqueCodes.includes(randomCode)) {
      uniqueCodes.push(randomCode);
    }
  }
  return uniqueCodes;
};

export const getCountriesArray = (countriesCount) => {
  let countriesArray = getUniqueCodes(countriesCount).map((code) =>
    getCountryData(code)
  );
  return countriesArray;
};

export const getQuestionData = async (countriesCount) => {
  const countriesArray = await getCountriesArray(countriesCount);

  let questionObj = {
    id: Math.floor(Math.random() * 1000000),
    pointWorth: countriesCount * 10,
    topic: getTopic(),
    countries: countriesArray,
    correctCountry:
      countriesArray[Math.floor(Math.random() * countriesArray.length)],
  };

  return questionObj;
};

export const getQuestions = async (questionsCount, countriesCount) => {
  let questionsArray = [];
  for (let i = 1; i <= questionsCount; i++) {
    const newData = await getQuestionData(countriesCount);
    questionsArray.push(newData);
  }
  return questionsArray;
};
