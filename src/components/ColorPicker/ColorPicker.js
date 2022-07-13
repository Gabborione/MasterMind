import React from "react";
import "./ColorPicker.scss";
import { TiTrash } from "react-icons/ti";
import { IoTrashBin } from "react-icons/io5";

const ColorPicker = ({
    color,
    removeColors,
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
            {removeColors ? <IoTrashBin /> : null}
        </div>
    );
};

export default ColorPicker;
