import React from "react";
import { Link } from "react-scroll";

const Internship = () => {
  return (
    <section
      id="internship"
      className="bg-white py-20 flex flex-col items-center justify-center"
    >
      <div className="flex-1 px-12 max-w-6xl">
        <h1 className="text-2xl font-bold mb-4 text-[#3B82F6] w-40 flex justify-center mx-auto">
          Internships
        </h1>
        <h1 className="text-5xl font-bold mb-8 text-center">Our Internships</h1>
        <p className="text-xl text-center">
          Our internships are available in a range of fields, including Web
          Development, Machine Learning, Data Science, and more. Interns will
          have the chance to work on real-world projects, collaborate with
          teams, and gain valuable insights into their respective industries.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center space-x-4 space-y-4 md:space-y-0 px-4 py-8">
        <div className="w-full md:w-1/3 max-w-xs border-2 border-cyan-600 rounded px-4 py-8">
          <h3 className="text-3xl font-bold mb-4">Software Development Internship</h3>
          <ul className="list-none list-inside text-xl">
            <li>Overview</li>
            <li>Life Cycle</li>
            <li>CLI Apps</li>
            <li>GUI Apps</li>
            <li>Web Scraping</li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_z_gyKbiEwAp1MCgKG2NZR9dm8Y3RZIKwWlaG9P4fECzNAw/viewform"
            className="bg-white text-blue-500 px-4 py-4 rounded-full shadow-md block text-center mt-4"
          >
            Apply Now
          </a>
        </div>
        <div className="w-full md:w-1/3 max-w-xs border-2 border-cyan-600 rounded px-4 py-16 bg-gradient-to-b from-[#2E5CD5] to-[#1997ED]">
          <div className="bg-white text-blue-500 px-4 py-4 rounded-full shadow-md mb-8 flex justify-center">
            POPULAR
          </div>
          <h3 className="text-3xl font-bold mb-4">Web Dev Internship</h3>
          <ul className="list-none list-inside text-xl">
            <li>Overview</li>
            <li>HTML5 & CSS3</li>
            <li>Javascript</li>
            <li>Responsive Website</li>
            <li>Web Applications</li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_z_gyKbiEwAp1MCgKG2NZR9dm8Y3RZIKwWlaG9P4fECzNAw/viewform"
            className="bg-white text-blue-500 px-4 py-4 rounded-full shadow-md block text-center mt-4"
          >
            Apply Now
          </a>
        </div>
        <div className="w-full md:w-1/3 max-w-xs border-2 border-cyan-600 rounded px-4 py-8">
          <h3 className="text-3xl font-bold mb-4">Android Development Internship</h3>
          <ul className="list-none list-inside text-xl">
            <li>Overview</li>
            <li>Kotlin/Flutter/React Native</li>
            <li>Simple Apps</li>
            <li>Advanced Apps</li>
            <li>Cloud Apps</li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_z_gyKbiEwAp1MCgKG2NZR9dm8Y3RZIKwWlaG9P4fECzNAw/viewform"
            className="bg-white text-blue-500 px-4 py-4 rounded-full shadow-md block text-center mt-4"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internship;