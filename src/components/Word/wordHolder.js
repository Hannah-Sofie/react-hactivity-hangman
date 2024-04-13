// wordHolder.js
let currentWord = [];

export const setWord = (word) => {
  currentWord = word;
};

export const getWord = () => {
  return currentWord;
};
