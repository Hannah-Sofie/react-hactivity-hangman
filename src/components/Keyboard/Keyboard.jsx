import React from "react";
import "./Keyboard.css";
import { letters } from "../../utils/letters";

const Keyboard = ({
  correctLetters,
  incorrectLetters,
  handleKeyboardClick,
}) => {
  const isLetterDisabled = (letter) =>
    correctLetters.includes(letter) || incorrectLetters.includes(letter);

  const getLetterClassName = (letter) => {
    if (correctLetters.includes(letter)) return "keyboard_letter correct";
    if (incorrectLetters.includes(letter)) return "keyboard_letter incorrect";
    return "keyboard_letter";
  };

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          disabled={isLetterDisabled(letter)}
          className={getLetterClassName(letter)}
          onClick={() => handleKeyboardClick(letter)}
          aria-disabled={isLetterDisabled(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
