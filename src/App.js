import "./App.scss";
import React, { useState, useEffect, useRef } from "react";
import Line from "./components/Line/Line";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import EndGame from "./components/EndGame/EndGame";
import Menu from "./components/Menu/Menu";

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
    const alreadyCalled = useRef(false);
    const isInit = useRef(0);
    const [recurrences, setRecurrences] = useState([]);
    const [win, setWin] = useState(false);
    const [end, setEnd] = useState(false);
    const [countTry, setCountTry] = useState(0);

    function arrayEquals(a, b) {
        return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
        );
    }

    function generateSolution() {
        let newSolution = [];

        for (let i = 0; i < SOLUTION_LENGTH; i++) {
            newSolution.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
        }

        setSolution(newSolution);

        return newSolution;
    }

    function reset() {
        setSolution([]);
        setGuesses(Array(MAX_TRY).fill(DEFAULT_GUESS));
        setCurrentGuess(DEFAULT_GUESS);
        setNext(false);
        setWin(false);
        setEnd(false);
        setCountTry(0);
    }

    function reload() {
        reset();

        let reccurencesTemp = [];
        const newSolution = generateSolution();
        // const newSolution = ["red", "yellow", "blue", "green"];

        newSolution.forEach((color) => {
            if (
                reccurencesTemp.find((val) => val.color === color) !== undefined
            ) {
            } else {
                let colorRecurrence = newSolution.filter((c) => c === color);
                reccurencesTemp.push({
                    color: color,
                    count: colorRecurrence.length,
                });
            }
        });

        setRecurrences(reccurencesTemp);
    }

    useEffect(() => {
        if (!alreadyCalled.current) {
            reload();

            alreadyCalled.current = true;
        }

        if (isInit.current < 2) {
            isInit.current++;
        } else {
            if (arrayEquals(currentGuess, solution)) {
                setWin(true);
                setEnd(true);
            } else if (countTry >= MAX_TRY - 1) {
                setEnd(true);
            }

            const newGuesses = [...guesses];
            if (currentGuess !== DEFAULT_GUESS) {
                newGuesses[guesses.findIndex((val) => val === DEFAULT_GUESS)] =
                    currentGuess;
            }

            setGuesses(newGuesses);
            setCurrentGuess(DEFAULT_GUESS);
            setCountTry((val) => val + 1);
        }
    }, [next]);

    return (
        <div className="container">
            <h1 className="title">COLOR MIND</h1>

            <Menu />
            <div className="body">
                <div className="colorsPickerContainer">
                    {COLORS.map((color, index) => {
                        return (
                            <ColorPicker
                                key={index}
                                color={color}
                                currentGuess={currentGuess}
                                setCurrentGuess={setCurrentGuess}
                                defaultColor={DEFAULT_COLOR}
                                defaultGuess={DEFAULT_GUESS}
                                isColor={true}
                                removeColors={false}
                            />
                        );
                    })}
                    <ColorPicker
                        color={DEFAULT_COLOR}
                        removeColors={true}
                        currentGuess={currentGuess}
                        setCurrentGuess={setCurrentGuess}
                        defaultColor={DEFAULT_COLOR}
                        defaultGuess={DEFAULT_GUESS}
                        isColor={false}
                    />
                    ;
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
                                recurrences={recurrences}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            {end && <EndGame solution={solution} win={win} reload={reload} />}
        </div>
    );
}

export default App;
