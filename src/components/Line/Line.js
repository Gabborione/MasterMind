import React, { useState, useEffect } from "react";
import "./Line.scss";

const DEFAULT_HINTS = Array(4).fill("grey");

const Line = ({ guess, solution, isFinal }) => {
    const [hints, setHints] = useState(DEFAULT_HINTS);

    useEffect(() => {
        const newHints = [];

        if (isFinal) {
            for (let i = 0; i < solution.length; i++) {
                if (guess[i] === solution[i]) {
                    newHints.push("match");
                } else {
                    newHints.push("mismatch");
                }
            }

            setHints(newHints);
        }
    }, []);

    return (
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
                    const isCurrentHint =
                        index === hints.findIndex((val) => val == null);
                    let hintColor = "grey";
                    if (isCurrentHint) {
                        if (value === "match") {
                            hintColor = "black";
                        } else {
                            hintColor = "white";
                        }
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
    );
};

export default Line;
