import React, { useState, useEffect } from "react";
import "./Line.scss";

const DEFAULT_COLOR = "grey";
const DEFAULT_HINTS = Array(4).fill(DEFAULT_COLOR);

const Line = ({ guess, solution, isFinal, isCurrentGuess, setNext }) => {
    const [hints, setHints] = useState(DEFAULT_HINTS);

    useEffect(() => {
        const newHints = [];
        if (isFinal) {
            let finded = [];
            for (let i = 0; i < solution.length; i++) {
                if (guess[i] === solution[i]) {
                    newHints[i] = "match";
                    finded[i] = i;
                } else if (solution.includes((val) => val === guess[i])) {
                    newHints[i] = "close";
                } else {
                    newHints[i] = "mismatch";
                }
            }

            setHints(newHints);
        }
    }, [isFinal]);

    const handleConfirm = () => {
        setNext(true);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0.8rem",
            }}
        >
            <div className="lineContainer">
                <div className="colorsContainer">
                    {guess.map((color, index) => {
                        return (
                            <div
                                className="color"
                                key={index}
                                style={{ backgroundColor: `${color}` }}
                            />
                        );
                    })}
                </div>

                <div className="hints">
                    {hints.map((value, index) => {
                        let hintColor = DEFAULT_COLOR;

                        if (value === "match") {
                            hintColor = "black";
                        } else if (value === "close") {
                            hintColor = "white";
                        } else {
                            hintColor = DEFAULT_COLOR;
                        }

                        return (
                            <div
                                className="hint"
                                key={index}
                                style={{ backgroundColor: `${hintColor}` }}
                            />
                        );
                    })}
                </div>
            </div>
            {isCurrentGuess && (
                <div className="confirm" onClick={handleConfirm}></div>
            )}
        </div>
    );
};

export default Line;
