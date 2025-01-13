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
                <a href="/" className="text-2xl text-neutral-800 font-pressStart">
                    Kim Le
                </a>

                {/* Hamburger icon for mobile */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-neutral-800 focus:outline-none"
                >
                    <IoIosMenu className="w-6 h-6" />
                </button>

                {/* Menu */}
                <ul
                    className={`lg:flex space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:static left-0 top-16 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10 px-6 py-6 lg:py-0 transition-all duration-300 ease-in-out ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <li>
                        <a
                            href="#about"
                            className="text-neutral-600 hover:text-yellow-500 font-medium"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-neutral-600 hover:text-yellow-500 font-medium"
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