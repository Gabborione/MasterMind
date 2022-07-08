import "./App.scss";
import React, { useState, useEffect } from "react";
import Line from "./components/Line/Line";

const Colors = ["red", "yellow", "blue", "green", "black", "white"];
const SOLUTION_LENGTH = 4;
const MAX_TRY = 10;
const DEFAULT_COLOR = "grey";

function App() {
    const [solution, setSolution] = useState([]);
    const [guesses, setGuesses] = useState(Array(MAX_TRY).fill(null));

    useEffect(() => {
        const newSolution = [];

        for (let i = 0; i < SOLUTION_LENGTH; i++) {
            newSolution.push(Colors[Math.floor(Math.random() * Colors.length)]);
        }

        setSolution(newSolution);
    }, []);

    return (
        <div className="Container">
            <h1 className="title">COLOR MIND</h1>
            {guesses.map((guess, index) => {
                return (
                    <Line
                        guess={
                            guess ?? [
                                DEFAULT_COLOR,
                                DEFAULT_COLOR,
                                DEFAULT_COLOR,
                                DEFAULT_COLOR,
                            ]
                        }
                        solution={solution}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default App;
