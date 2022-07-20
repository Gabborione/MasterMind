import React, { useState } from "react";
import "./Menu.scss";
import { FaBook, FaBookOpen } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const solution = ["red", "yellow", "blue", "green"];
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
        <nav id="navContainer">
          <h1>How to play</h1>
          <h2>Find the hidden sequence:</h2>
          <p>es.</p>
          <div
            className="lineContainer"
            id="solution"
            style={{ margin: "1rem 0 1rem 0" }}
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
            color guess of the code peg’s position and color, place one black
            key peg. Place one white key peg for each code peg, which is of the
            right color but in the wrong hole. Don’t place any key pegs for a
            code peg if both of its parameters are wrong. Put these key pegs in
            any random order, not according to their corresponding code pegs.
          </p>
        </nav>
      </div>
    </>
  );
};

export default Menu;
