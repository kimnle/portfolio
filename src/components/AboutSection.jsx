import React from "react";
import Button from "./Button";

const AboutSection = () => {
    return (
        <section className="py-16 bg-neutral-50 text-yellow-950" id="about">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* About text */}
                    <div className="flex-1">
                        <p className="text-lg mb-6 leading-relaxed">
                            With a Bachelor of Science degree in Mathematics, I transitioned into a software development to pursue my curiosity for coding. Through Coder Academy, I built a solid foundation in frontend and backend development, discovering a genuine enthusiasm for creating engaging and seamless user experiences.
                            
                            With three years of project management experience in the fast-moving consumer goods (FMCG) industry, I am also open to exploring opportunities software project management, allowing me to blend my technical expertise with my proven project management skills.

                            In my free time, I enjoy reading, crocheting, and traveling. It's rare that if you ask me what book I am reading, I reply with nothing. Crocheting provides an outlet for my creativity, allowing me to produce tangible, rewarding projects. I also feel incredibly fortunate to travel and explore the world, embracing the beauty and diversity of different cultures and landscapes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}