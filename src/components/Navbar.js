import React from "react";
import Image from "../Images/JP Logo Trimmed.png";

export default function Navbar() {
  return (
    <header className="bg-primary md:sticky top-0 z-10 md:py-1">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center md:py-3 my-2">
        <a href="#about">
          <img
            alt="Just Preppin Logo"
            src={Image}
            className="w-35 h-auto max-h-12 md:px-1"
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#services" className="mr-5 hover:text-secondary">
            Services
          </a>
          <a href="#pricing" className="mr-5 hover:text-secondary">
            Pricing
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-secondary border-0 py-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 font-bold text-white"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}
