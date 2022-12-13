import { useState, useEffect } from "react";
import { getTopic } from "./TopicsList";
import { getCountryCode } from "./CountriesList";

const fetchHeaders = new Headers();
fetchHeaders.append("apikey", "T3mDSdb6OhyhG3hvjLch3XTizzZAaDBA");
const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: fetchHeaders,
};

export const getCountryData = async (countryCode) => {
  const response = await fetch(
    `https://api.apilayer.com/geo/country/code/${countryCode}`,
    requestOptions
  );
  const data = await response.json();
  return data[0];
};

export const getCountriesArray = async (countriesCount) => {
  let countriesArray = [];
  for (let i = 1; i <= countriesCount; i++) {
    countriesArray.push(await getCountryData(getCountryCode()));
  }
  return countriesArray;
};

export const getQuestionData = async (countriesCount) => {
  const countriesArray = await getCountriesArray(countriesCount);
  console.log(countriesArray);
  let questionObj = {
    pointWorth: countriesCount * 10,
    topic: getTopic(),
    countries: countriesArray,
    // correctCountry: countries[Math.floor(Math.random() * countries.length)],
  };

  return questionObj;
};
