import React from "react";
import homeBg from "../assets/home-bg.png";
import kimMemoji from "../assets/kim-memoji.png";

const HomeSection = () => {
    return (
        <section className="bg-stone-50 min-h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-evenly">
                {/* Left content */}
                <div className="max-w-lg z-10">
                    <h1 className="text-4xl font-bold text-stone-800 mb-4 leading-tight font-jua">
                        Hello, world! I'm{""}
                        <span className="block">Kim Le,</span>
                    </h1>
                    <p className="text-yellow-950 text-lg mb-6">
                        a junior full-stack web developer.
                    </p>
                </div>

                {/* Right images */}
                <div className="relative flex items-center justify-center">
                    {/* Background image */}
                    <img
                        src={homeBg}
                        alt="Home background"
                        className="absolute inset-0 rounded-full w-80 h-80 md:w-96 md:h-96 z-0"
                    />

                    {/* Foreground image */}
                    <img
                        src={kimMemoji}
                        alt="Kim Memoji"
                        className="relative rounded-lg z-10 w-64 h-64 md:w-80 md:h-80"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeSection;