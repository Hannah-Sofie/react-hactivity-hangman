// import React, { useState, useEffect } from "react";
// import "./Word.css";
// import wordsData from "../../utils/wordsData.json";
// import { wordArray } from "./wordArray";

// function Word() {
//   const [wordArray, setWordArray] = useState([]);

//   // Function that gets random word
//   const getWord = () => {
//     const randomIndex = Math.floor(Math.random() * wordsData.words.length);
//     return wordsData.words[randomIndex];
//   };

//   useEffect(() => {
//     // Generate random word and split it into an array of characters
//     const randomWord = getWord();
//     const letters = randomWord.split("");

//     // Update the state with the new word array
//     setWordArray(letters);
//   }, []); // Empty dependency array to ensure this effect runs only once on component mount

//   return (
//     <div className="wordcontainer">
//       <div className="letter">
//         {/* Map over the wordArray state to create <p> tags */}
//         {wordArray.map((letter, index) => (
//           <p key={index}>{letter}</p>
//         ))}
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default Word;

import React from "react";
import "./Word.css";

function Word({ wordToGuess, guessedLetters }) {
  const wordArray = wordToGuess.split("");
  console.log("tesdjlasdjdlksaj", wordToGuess);
  const displayWord = wordArray.map((letter) =>
    guessedLetters.includes(letter) ? letter : "_"
  );

  return <div className="word">{displayWord.join(" ")}</div>;
}

export default Word;
