import React, { useState } from "react";
import "./Menu.scss";
import { FaBook, FaBookOpen } from "react-icons/fa";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="menuContainer">
            <div className="menuIcon">
                {isOpen ? <FaBookOpen /> : <FaBook />}
            </div>
            <nav>
                <div></div>
            </nav>
        </div>
    );
};

export default Menu;
