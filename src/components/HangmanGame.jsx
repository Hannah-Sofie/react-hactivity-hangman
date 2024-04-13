import React, { Component } from "react";
import Hangman from "./Hangman/Hangman";
import Keyboard from "./Keyboard/Keyboard";
import Word from "./Word/Word";
import wordsData from "../utils/wordsData.json";

export default class HangmanGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordToGuess: this.getRandomWord(),
      guessedLetters: [],
      correctLetters: [],
      incorrectLetters: [],
    };
  }

  // Function to get a random word
  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsData.words.length);
    return wordsData.words[randomIndex];
  }

  handleKeyboardClick = (letter) => {
    this.setState((prevState) => {
      const isCorrect = prevState.wordToGuess.includes(letter);
      return {
        guessedLetters: [...prevState.guessedLetters, letter],
        correctLetters: isCorrect
          ? [...prevState.correctLetters, letter]
          : prevState.correctLetters,
        incorrectLetters: !isCorrect
          ? [...prevState.incorrectLetters, letter]
          : prevState.incorrectLetters,
      };
    });
  };

  render() {
    const { correctLetters, incorrectLetters, guessedLetters, wordToGuess } =
      this.state;

    return (
      <>
        <Hangman incorrectLetters={incorrectLetters} />
        <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <Keyboard
          correctLetters={correctLetters}
          incorrectLetters={incorrectLetters}
          handleKeyboardClick={this.handleKeyboardClick}
        />
      </>
    );
  }
}
