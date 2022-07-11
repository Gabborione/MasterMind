import React, { useState, useEffect } from "react";
import "./Line.scss";

const DEFAULT_COLOR = "grey";
const DEFAULT_HINTS = Array(4).fill(DEFAULT_COLOR);

const Line = ({ guess, solution, isFinal, isCurrentGuess, setNext }) => {
    const [hints, setHints] = useState(DEFAULT_HINTS);

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    useEffect(() => {
        const newHints = [];
        if (isFinal) {
            let recurrences = [];
            solution.forEach((color) => {
                if (
                    recurrences.find((val) => val.color === color) !== undefined
                ) {
                } else {
                    let colorRecurrence = solution.filter((c) => c === color);
                    recurrences.push({
                        color: color,
                        count: colorRecurrence.length,
                    });
                }
            });

            console.log(recurrences);

            for (let i = 0; i < solution.length; i++) {
                if (guess[i] === solution[i]) {
                    newHints.push("match");
                    recurrences[
                        recurrences.findIndex((val) => val.color === guess[i])
                    ].count--;
                }
            }

            for (let i = 0; i < solution.length; i++) {
                if (guess[i] === solution[i]) {
                } else if (
                    recurrences.find(
                        (val) => val.color === guess[i] && val.count > 0
                    )
                ) {
                    newHints.push("close");
                    let curr = recurrences.findIndex(
                        (val) => val.color === guess[i]
                    );
                    if (recurrences[curr].count > 0) recurrences[curr].count--;
                } else {
                    newHints.push("mismatch");
                }
            }

            setHints(shuffle(newHints));
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
