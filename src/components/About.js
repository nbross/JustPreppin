import React from "react";
import Image from "../Images/Warhouse.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center md:py-4">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium text-white">
            Who Are <span className="text-secondary">We?</span>
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
            We're Professional Packers and Shippers.
          </h1>
          <p className="mb-8 leading-relaxed">
            We are a Third-Party Logistics (3PL) Prep Center for Amazon sellers
            looking to expand and outsource their prepping needs. We're located
            in Mentor, OH just outside Cleveland. At "Just Preppin", we
            understand the importance of communication and strive for excellent
            customer service by providing every customer with a personal
            representative. This includes weekly, monthly, or quarterly
            meetings/phone calls to make sure your products are handled exactly
            how you intend them to be.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="Distribution Center" src={Image} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
