import React from "react";
import "./EndGame.scss";
import { TiRefresh } from "react-icons/ti/";

const EndGame = ({ solution, win }) => {
    return (
        <div className="overlay">
            <div className="endCard">
                <h1 className="title">{win ? "YOU WIN" : "YOU LOOSE"}</h1>
                <p>SOLUTION:</p>
                <div
                    className="lineContainer"
                    style={{
                        background: "url(Images/BackgroundImage.jfif) right",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backgroundBlendMode: "lighten",
                        boxShadow: "-1px 2px 7px 3px rgba(0, 0, 0, 0.7)",
                        border: "none",
                    }}
                >
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
                    <button
                        className="button"
                        onClick={() => window.location.reload()}
                    >
                        <TiRefresh />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EndGame;
