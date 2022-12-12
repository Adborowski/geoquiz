export const topicsList = ["capital", "flag", "population"];

export const getTopic = () => {
  const randIndex = Math.floor(Math.random() * topicsList.length);
  return topicsList[randIndex];
};
