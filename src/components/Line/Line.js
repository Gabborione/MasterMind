import React, { useState, useEffect } from "react";
import "./Line.scss";

const Line = ({ guess, solution }) => {
    const [hints, setHints] = useState(Array(solution.length).fill(null));

    useEffect(() => {
        if (guess) {
            const newHints = [];

            for (let i = 0; i < solution.length; i++) {
                if (guess[i] === solution[i]) {
                    newHints.push("match");
                } else {
                    newHints.push("mismatch");
                }
            }

            let className = "hint";

            setHints(newHints);
        }
    }, [guess, solution]);

    return (
        <div className="container">
            {guess.map((color, index) => {
                return (
                    <div
                        className="color"
                        key={index}
                        style={{ backgroundColor: `${color}` }}
                    />
                );
            })}

            <div className="hints">
                {hints.map((value, index) => {
                    return <div className={className} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Line;
