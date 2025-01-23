import React from "react";
import Button from "./Button";
import projects from "./ProjectsData";

const ProjectsSection = () => {
    return (
        <section className="bg-stone-50 py-16 px-8">
            <div className="container mx-auto">
                {/* Section title */}
                <h2 className="text-4xl font-bold text-center mb-12 font-jua text-stone-800 bg-yellow-200 mx-14 md:mx-64 lg:mx-[365px] xl:mx-[490px]">Projects</h2>

                {/* Projects */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`flex flex-col md:flex-row ${
                                project.id % 2 === 1 ? "md:flex-row-reverse" : ""
                                } items-stretch bg-white shadow-lg rounded-lg overflow-hidden`}
                        >
                            {/* Project image */}
                            <div className="w-full md:w-1/2 h-auto">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Project content */}
                            <div className="w-full md:w-1/2 p-6">
                                <h3 className="text-2xl font-semibold mb-4 font-jua text-stone-800">{project.name}</h3>
                                <p className="text-yellow-950 mb-6 text-justify">{project.description}</p>
                                <Button
                                    text="View Project"
                                    onClick={() => window.open(project.link)}
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