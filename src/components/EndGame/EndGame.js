import React from "react";
import Line from "../Line/Line";
import "./EndGame.scss";

const EndGame = ({ solution, win }) => {
    return (
        <div className="overlay">
            <div className="endCard">
                <h1 className="title">{win ? "HAI VINTO" : "HAI PERSO"}</h1>
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
                    <button className="button" onClick={() => window.location.reload()}></button>
                </div>
            </div>
        </div>
    );
};

export default EndGame;
