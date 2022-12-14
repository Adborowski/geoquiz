import { getTopic } from "./TopicsList";
import { getCountryCode } from "./CountriesList";

const fetchHeaders = new Headers();
fetchHeaders.append("apikey", "T3mDSdb6OhyhG3hvjLch3XTizzZAaDBA");
const requestOptions = {
  method: "GET",
  // redirect: "follow",
  headers: fetchHeaders,
};
// T3mDSdb6OhyhG3hvjLch3XTizzZAaDBA

export const getCountryData = async (countryCode) => {
  const response = await fetch(
    `https://api.apilayer.com/geo/country/code/${countryCode}`,
    requestOptions
  );
  const data = await response.json();
  data[0].flagURL = await getFlagURL(countryCode);
  return data[0];
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
