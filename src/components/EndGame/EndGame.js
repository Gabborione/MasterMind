import React from "react";
import "./EndGame.scss";
import { TiRefresh } from "react-icons/ti/";

const EndGame = ({ solution, win, reload }) => {
    return (
        <div className="overlay">
            <div className="endCard">
                <h1 className="title">{win ? "YOU WIN" : "YOU LOOSE"}</h1>
                <p>SOLUTION:</p>
                <div className="lineContainer">
                    {solution.map((color, index) => {
                        return (
                            <div
                                className="color"
                                key={index}
                                style={{ backgroundColor: `${color}` }}
                            />
                        );
                    })}
                </div>
                <div className="commands">
                    <button className="button" onClick={reload}>
                        <TiRefresh />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EndGame;
