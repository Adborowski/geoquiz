import { getTopic } from "./TopicsList";
import { getCountryCode } from "./CountriesList";

const getAllCountries = async () => {
  const response = await fetch(`http://178.128.198.24:3000/api/`);
  const data = await response.json();
  return data;
};

const countries = await getAllCountries();

const getCountryData = async (countryCode) => {
  const data = countries[countryCode];
  return data;
};

export const getCountriesArray = async (countriesCount) => {
  let countriesArray = [];
  for (let i = 1; i <= countriesCount; i++) {
    countriesArray.push(await getCountryData(getCountryCode()));
  }
  return countriesArray;
};

async function getFlagURL(countryCode) {
  const res = await fetch(
    `https://flagcdn.com/${countryCode.toLowerCase()}.svg`
  );
  const blob = await res.blob();
  const blobURL = URL.createObjectURL(blob);
  return blobURL;
}

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
