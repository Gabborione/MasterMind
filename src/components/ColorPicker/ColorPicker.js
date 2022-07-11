import React from "react";
import "./ColorPicker.scss";

const ColorPicker = ({
    color,
    text,
    currentGuess,
    setCurrentGuess,
    defaultColor,
    defaultGuess,
}) => {
    const handleColorClick = (event) => {
        const newGuess = [...currentGuess];
        newGuess[currentGuess.findIndex((val) => val === defaultColor)] =
            event.target.style.backgroundColor;

        if (newGuess != currentGuess) {
            setCurrentGuess(newGuess);
        }
    };

    return (
        <div
            className="colorPicker"
            style={{ backgroundColor: `${color}` }}
            onClick={handleColorClick}
        >
            {text}
        </div>
    );
};

export default ColorPicker;
