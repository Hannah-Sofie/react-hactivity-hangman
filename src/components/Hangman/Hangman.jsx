import React from "react";
import "./Hangman.css";
// Import SVGs
import body from "../HangmanSVGs/body.svg";
import Handbase from "../HangmanSVGs/Hangbase.svg";
import head from "../HangmanSVGs/head.svg";
import leftArm from "../HangmanSVGs/left_arm.svg";
import leftLeg from "../HangmanSVGs/left_leg.svg";
import rightArm from "../HangmanSVGs/right_arm.svg";
import rightLeg from "../HangmanSVGs/right_leg.svg";

const Hangman = ({ incorrectLetters }) => {
  // You can adjust the order based on how you want the hangman to be built
  console.log("Number of incorrect letters:", incorrectLetters.length);
  const svgComponents = [
    head,
    body,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    Handbase,
  ];
  const wrongGuesses = incorrectLetters.length;

  return (
    <>
      <div id="hangmanContainer">
        <div id="hangmanRope"></div>
        <div id="hangmanTop"></div>
        <div id="hangmanPole"></div>
        <div id="hangmanBase"></div>
        {svgComponents.slice(0, wrongGuesses).map((SvgComponent, index) => (
          <img
            key={index}
            src={SvgComponent}
            alt={`Hangman part ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Hangman;
