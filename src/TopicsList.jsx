export const topicsList = ["capital", "flag"];

export const getTopic = () => {
  const randIndex = Math.floor(Math.random() * topicsList.length);
  return topicsList[randIndex];
};
