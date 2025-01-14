import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-white py-6 text-center">
            <div className="container mx-auto">
                {/* Footer text */}
                <p className="text-sm text-yellow-950">
                    Contacts
                </p>
                
                {/* Social links */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="https://www.linkedin.com/in/kim-le-0558bb191/"
                        className="text-stone-800 hover:text-yellow-500 transition-colors duration-200"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a
                        href="mailto:kimnle002@gmail.com"
                        className="text-stone-800 hover:text-yellow-500 transition-colors duration-200"
                        aria-label="Email"
                    >
                        <MdEmail className="text-3xl" />
                    </a>
                    <a
                        href="https://github.com/kimnle"
                        className="text-stone-800 hover:text-yellow-500 transition-colors duration-200"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <IoLogoGithub className="text-3xl" />
                        </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;