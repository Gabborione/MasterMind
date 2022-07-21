import React, { useState } from "react";
import "./Menu.scss";
import { FaBook, FaBookOpen } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const solution = ["red", "yellow", "blue", "green"];
  const guess = ["red", "green", "blue", "black"];
  const hints = ["black", "white", "grey", "white"];
  return (
    <>
      {isOpen && <div className="overlayMenu" />}
      <div className="menuContainer ">
        <div
          className="menuIcon"
          aria-controls="navContainer"
          aria-expanded="false"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaBookOpen /> : <FaBook />}
        </div>
        {isOpen && (
          <nav id="navContainer">
            <h1>How to play</h1>
            <h2>Find the hidden sequence:</h2>
            <p>es.</p>
            <div
              className="lineContainer"
              id="solutionEs"
              style={{ margin: "5% 0 5% 0" }}
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
            <p>
              If your guess isn't correct, there will be 4 pegs, one for each
              color, the black one means that the color and the position are
              right, the white one means that the color is right but on the
              wrong position. If the peg is grey it means that the color is
              wrong. The pegs are in a random order, not according to their
              corresponding code pegs.
            </p>
            <div
              className="lineContainer"
              id="guessEs"
              style={{ marginTop: "5%" }}
            >
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
                  return (
                    <div
                      className="hint"
                      key={index}
                      style={{ backgroundColor: `${value}` }}
                    />
                  );
                })}
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Menu;
