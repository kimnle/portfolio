import React from "react";
import Button from "./Button";

const AboutSection = () => {
    return (
        <section className="pb-16 bg-neutral-50 text-yellow-950" id="about">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold mb-8 text-center font-jua text-stone-800">About Me</h2>

                <div className="flex flex-col md:flex-row items-center gap-12 md:items-start">
                    {/* About text */}
                    <div className="flex-1">
                        <p className="text-lg mb-6 leading-relaxed text-justify">
                            With a Bachelor of Science degree in Mathematics, I transitioned into a software development to pursue my curiosity for coding. Through Coder Academy, I built a solid foundation in frontend and backend development, discovering a genuine enthusiasm for creating engaging and seamless user experiences.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed text-justify">
                            With three years of project management experience in the processing and packaging industry, I am also open to exploring opportunities software project management, allowing me to blend my technical expertise with my proven project management skills.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed text-justify">
                            In my free time, I enjoy reading, crocheting, and traveling. It's rare that if you ask me what book I am reading, I reply with nothing. Crocheting provides an outlet for my creativity, allowing me to produce tangible, rewarding projects. I also feel incredibly fortunate to travel and explore the world, embracing the beauty and diversity of different cultures and landscapes.
                        </p>

                        <Button
                            text="Resume"
                            href="../assets/kim-resume.pdf"
                            size="md"
                        />
                    </div>

                    {/* Experience and education */}
                    <div className="flex-1">
                        {/* Experience */}
                        <div className="mb-8">
                            <h3 class="text-2xl font-semibold mb-4 font-jua text-stone-800">Experience</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong className="text-stone-800">Customer CARE and Project Support</strong> - Matthews Australasia <br />
                                    <span className="text-sm">
                                        February 2024 - May 2024
                                    </span>
                                </li>
                                <li>
                                    <strong className="text-stone-800">Junior Project Manager</strong> - Matthews Australasia <br />
                                    <span className="text-sm">
                                        January 2023 - February 2024
                                    </span>
                                </li>
                                <li>
                                    <strong className="text-stone-800">Project Support Coordinator</strong> - Matthews Australasia <br />
                                    <span className="text-sm">
                                        March 2021 - January 2023
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 font-jua text-stone-800">Education</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong className="text-stone-800">Diploma of Information Technology</strong> - Coder Academy <br />
                                    <span className="text-sm">
                                        February 2024 - December 2024
                                    </span>
                                </li>
                                <li>
                                    <strong className="text-stone-800">Bachelor of Science - BS, Mathematics</strong> - Monash University <br />
                                    <span className="text-sm">
                                        March 2016 - January 2020
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;