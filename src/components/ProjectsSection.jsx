import React from "react";
import Button from "./Button";

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            name: "Portfolio",
            description: "Created a portfolio website which presents me as a dev and IT professional. The purpose was to provide an online portfolio that provides information about me, my skills, interests, professional knowledge and a showcase of my work.",
            image: "src/assets/project1.png",
            link: "",
        },
        {
            id: 2,
            name: "Terminal Application",
            description: "Designed, implemented and tested a terminal application and throughout the process demonstrated that I am able to use a range of developer tools.",
            image: "src/assets/project2.png",
            link: "",
        },
        {
            id: 3,
            name: "API Webserver",
            description: "In order to demonstrate my understanding of fundamental programming concepts and database design, I was required to develop an API that works with a database, implementing functionality suitable for a realistic API concept.",
            image: "src/assets/project3.png",
            link: ""
        },
        {
            id: 4,
            name: "Full Stack App",
            description: "I was to design a web application (app) built for a real world customer, or design a web application (app) built for a hypothetical customer with a realistic problem.",
            image: "src/assets/project4.png",
            link: "",
        }
    ]

    return (
        <section className="bg-stone-50 py-16 px-8">
            <div className="container mx-auto">
                {/* Section title */}
                <h2 className="text-4xl font-bold text-center mb-12 font-jua text-stone-800">Projects</h2>

                {/* Projects */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            {/* Project image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Project content */}
                            <div className="w-full md:w-1/2 p-6">
                                <h3 className="text-xl font-semibold mb-4 font-jua text-stone-800">{project.name}</h3>
                                <p className="text-yellow-950 mb-6">{project.description}</p>
                                <Button
                                    text="View Project"
                                    href=""
                                    size="md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;