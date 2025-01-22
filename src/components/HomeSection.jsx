import React from "react";
import homeBg from "../assets/home-bg.png";
import kimMemoji from "../assets/kim-memoji.png";

const HomeSection = () => {
    return (
        <section className="bg-stone-50 min-h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-evenly">
                {/* Content */}
                <div className="max-w-lg z-10">
                    <h1 className="text-5xl font-bold text-stone-800 mb-4 leading-tight font-jua">
                        Hello, world! I'm{""}
                        <span className="block">Kim Le,</span>
                    </h1>
                    <p className="text-yellow-950 text-lg mb-6">
                        a junior full-stack web developer.
                    </p>
                </div>

                {/* Images */}
                <div className="relative flex items-center justify-center w-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                    {/* Background image */}
                    <img
                        src={homeBg}
                        alt="Home background"
                        className="absolute inset-0 w-full h-72 md:h-5/6 lg:h-full object-cover z-0"
                    />

                    {/* Foreground image */}
                    <img
                        src={kimMemoji}
                        alt="Kim Memoji"
                        className="relative rounded-lg z-10 w-3/4 h-3/4 md:bottom-20 lg:bottom-12"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeSection;