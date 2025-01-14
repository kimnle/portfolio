import React from "react";
import homeBg from "../assets/home-bg.png";
import kimMemoji from "../assets/kim-memoji.png";

const HomeSection = () => {
    return (
        <section className="bg-neutral-50 min-h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
                {/* Left content */}
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                        Hello, world! I'm{""}
                        <span className="block">Kim Le,</span>
                    </h1>
                    <p className="text-neutral-600 text-lg mb-6">
                        a junior full-stack web developer.
                    </p>
                </div>

                {/* Right image */}
                <div className="relative">
                    <img
                        src={homeBg}
                        alt="Home background"
                        className="absolute rounded-full w-80 h-80"
                    />
                    <img
                        src={kimMemoji}
                        alt="Kim Memoji"
                        className="relative rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeSection;