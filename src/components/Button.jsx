import React from "react";

const Button = ({ text, onClick, type = "button", size = "md", href }) => {
    const style = 
        "inline-block bg-stone-50 text-stone-800 font-medium rounded-full border-solid border border-yellow-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 hover:bg-yellow-200";
    
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