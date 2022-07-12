import React from "react";
import "./ColorPicker.scss";

const ColorPicker = ({
    color,
    text,
    currentGuess,
    setCurrentGuess,
    defaultColor,
    defaultGuess,
    isColor,
}) => {
    const handleColorClick = (event) => {
        const newGuess = [...currentGuess];
        newGuess[currentGuess.findIndex((val) => val === defaultColor)] =
            event.target.style.backgroundColor;

        if (newGuess != currentGuess) {
            setCurrentGuess(newGuess);
        }
    };

    const handleDelete = () => {
        setCurrentGuess(defaultGuess);
    };

    return (
        <div
            className="colorPicker"
            style={{ backgroundColor: `${color}` }}
            onClick={isColor ? handleColorClick : handleDelete}
        >
            {text}
        </div>
    );
};

export default ColorPicker;
