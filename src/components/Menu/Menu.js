import React, { useState } from "react";
import "./Menu.scss";
import { FaBook, FaBookOpen } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <div></div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
