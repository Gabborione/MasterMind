import "./App.scss";
import React, { useState, useEffect } from "react";
import Line from "./components/Line/Line";

const Colors = ["red", "yellow", "blue", "green", "black", "white"];
const SOLUTION_LENGTH = 4;
const MAX_TRY = 10;
const DEFAULT_COLOR = "grey";
const DEFAULT_GUESS = [
    DEFAULT_COLOR,
    DEFAULT_COLOR,
    DEFAULT_COLOR,
    DEFAULT_COLOR,
];

function App() {
    const [solution, setSolution] = useState([]);
    const [guesses, setGuesses] = useState(Array(MAX_TRY).fill(null));
    const [currentGuess, setCurrentGuess] = useState(DEFAULT_GUESS);

    useEffect(() => {
        const newSolution = [];

        for (let i = 0; i < SOLUTION_LENGTH; i++) {
            newSolution.push(Colors[Math.floor(Math.random() * Colors.length)]);
        }

        setSolution(newSolution);
    }, []);

    return (
        <div className="container">
            <h1 className="title">COLOR MIND</h1>
            <div className="linesContainer">
                {guesses.map((guess, index) => {
                    const isCurrentGuess =
                        index === guesses.findIndex((val) => val == null);
                    return (
                        <Line
                            guess={
                                isCurrentGuess
                                    ? currentGuess
                                    : guess ?? DEFAULT_GUESS
                            }
                            isFinal={!isCurrentGuess && guess != null}
                            solution={solution}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
