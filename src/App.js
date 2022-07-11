import "./App.scss";
import React, { useState, useEffect } from "react";
import Line from "./components/Line/Line";
import ColorPicker from "./components/ColorPicker/ColorPicker";

const COLORS = ["red", "yellow", "blue", "green", "black", "white"];
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
    const [guesses, setGuesses] = useState(Array(MAX_TRY).fill(DEFAULT_GUESS));
    const [currentGuess, setCurrentGuess] = useState(DEFAULT_GUESS);
    const [next, setNext] = useState(false);

    useEffect(() => {
        const newSolution = ["red", "yellow", "blue", "green"];

        // for (let i = 0; i < SOLUTION_LENGTH; i++) {
        //     newSolution.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
        // }

        setSolution(newSolution);
    }, []);

    useEffect(() => {
        const newGuesses = [...guesses];
        if (currentGuess !== DEFAULT_GUESS) {
            newGuesses[guesses.findIndex((val) => val === DEFAULT_GUESS)] =
                currentGuess;
        }

        setGuesses(newGuesses);
        setCurrentGuess(DEFAULT_GUESS);
        setNext(false);
    }, [next]);

    return (
        <div className="container">
            <h1 className="title">COLOR MIND</h1>
            <div className="body">
                <div className="colorsPickerContainer">
                    {COLORS.map((color, index) => {
                        return (
                            <ColorPicker
                                key={index}
                                color={color}
                                text={""}
                                currentGuess={currentGuess}
                                setCurrentGuess={setCurrentGuess}
                                defaultColor={DEFAULT_COLOR}
                                defaultguess={DEFAULT_GUESS}
                            />
                        );
                    })}
                    <ColorPicker color="grey" text={"X"} />;
                </div>
                <div className="linesContainer">
                    {guesses.map((guess, index) => {
                        let isCurrentGuess =
                            index ===
                            guesses.findIndex((val) => val === DEFAULT_GUESS);
                        return (
                            <Line
                                guess={
                                    isCurrentGuess
                                        ? currentGuess
                                        : guess ?? DEFAULT_GUESS
                                }
                                isFinal={
                                    !isCurrentGuess && guess !== DEFAULT_GUESS
                                }
                                solution={solution}
                                isCurrentGuess={isCurrentGuess}
                                setNext={setNext}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
