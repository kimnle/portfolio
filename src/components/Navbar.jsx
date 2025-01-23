import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl text-stone-800 font-pressStart hover:text-yellow-500">
                    Kim Le
                </a>

                {/* Hamburger icon for mobile */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-yellow-950 focus:outline-none"
                >
                    <IoIosMenu className="w-8 h-8" />
                </button>

                {/* Menu */}
                <ul
                    className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 fixed lg:static left-0 top-[80px] w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10 px-6 py-4 pl-14 lg:py-0 lg:pl-0 transition-all duration-300 ease-in-out transform ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <li>
                        <a
                            href="#about"
                            className="text-left text-yellow-950 hover:text-yellow-500 block"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-left text-yellow-950 hover:text-yellow-500 block"
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;