import React from "react";

const Button = ({ text, onClick, type = "button", size = "md", href }) => {
    const style = 
        "inline-block bg-yellow-500 text-white font-medium rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 hover:bg-yellow-600";
    
    // Size specific styles
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // Render a button or a link
    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${style} ${sizes[size]}`}
        >
            {text}
        </a>
    ) : (
        <button
            type={type}
            onClick={onClick}
            className={`${style} ${sizes[size]}`}
        >
            {text}
        </button>
    )
}

export default Button;