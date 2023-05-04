import { BadgeCheckIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Services() {
  return (
    <section id="services">
      <div className="container px-5 py-7 mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Prep Services
            </h1>
          </div>
          <div className="inline-block">
            <ClipboardCheckIcon className="w-10 inline-block mb-4 text-secondary" />
          </div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Our Service Includes
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded-full flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-secondary w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
