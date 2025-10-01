import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-stretch w-full gap-6 mt-10 md:mt-20 h-auto md:h-48 lg:h-64">
        <div className="flex-shrink-0 overflow-hidden">
          <img
            src="/np-photo.jpg"
            alt="Profile"
            className="h-full w-auto rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h1 className=" text-3xl md:text-5xl font-bold text-gray-800">
              Nick Pelletier
            </h1>
            <h3 className="text-xl pl-0.5 font-semibold text-gray-600">
              Web Developer
            </h3>{" "}
            <p className="pl-0.5 mt-2">Montreal, QC</p>
            <a
              href="mailto:nickwpelletier@gmail.com"
              className="pl-0.5"
            >
              nickw.pelletier@gmail.com
            </a>
          </div>{" "}
          <div className="flex flex-row gap-10 md:gap-40 pl-0.5 mt-4 text-gray-500 justify-between items-end">
            <div className="flex flex-row flex-shrink-0 gap-6">
              <a
                href="https://www.linkedin.com/in/nwpelletier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="linkedin-icon.png"
                  className="inline h-10 w-10 hover:opacity-70 hover:scale-105 transition-all duration-200"
                />
              </a>
              <a
                href="https://github.com/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <img
                  src="github-icon.png"
                  className="inline h-9 w-9 mr-2 hover:opacity-70 hover:scale-105 transition-all duration-200"
                />
              </a>
            </div>
            <div>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group whitespace-nowrap"
              >
                Download Resume
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p className="text-lg tracking-thinner text-justify">
          I'm a full-stack web developer with 3 years
          experience in building React apps.
        </p>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
