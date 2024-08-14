import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from '../resources/logo.svg'

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: [0, 0.5, 1], 
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    
    const updateInitialSection = () => {
      sections.forEach((section) => {
        if (
          window.scrollY >= section.offsetTop &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };
    updateInitialSection();

    
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    setIsDropdownOpen(false); 
  };

  const getNavClasses = () => {
    let baseClasses = "fixed w-full p-4 transition-colors duration-500 ";
    if (activeSection === "home") {
      return `${baseClasses} bg-blue-500 text-white`; 
    } else if (isScrolled) {
      return `${baseClasses} bg-white text-black shadow-md`; 
    } else {
      return `${baseClasses} bg-transparent text-black`; 
    }
  };

  return (
    <header className={getNavClasses()}>
      <nav className="flex justify-between font-serif font-extrabold text-xl items-center">
        <img src={logo} alt="" className="w-16 md:w-20 lg:w-24" />
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => handleClick("home")}
            className={`${
              activeSection === "home" ? "text-white" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => handleClick("about")}
            className={`${
              activeSection === "about" ? "text-blue-700" : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            to="internship"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => handleClick("internship")}
            className={`${
              activeSection === "internship" ? "text-blue-700" : "text-black"
            }`}
          >
            Internships
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => handleClick("contact")}
            className={`${
              activeSection === "contact" ? "text-blue-700" : "text-black"
            }`}
          >
            Contact
          </Link>
        </div>
        <button
          className="block md:hidden ml-auto"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      <div
        className={`
          absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10
          ${isDropdownOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => handleClick("home")}
            className={`
              block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
              ${activeSection === "home" ? "bg-blue-500 text-white" : ""}
            `}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => handleClick("about")}
            className={`
              block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
              ${activeSection === "about" ? "bg-blue-500 text-white" : ""}
            `}
          >
            About
          </Link>
          <Link
            to="internship"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => handleClick("internship")}
            className={`
              block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
              ${activeSection === "internship" ? "bg-blue-500 text-white" : ""}
            `}
          >
            Internships
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => handleClick("contact")}
            className={`
              block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
              ${activeSection === "contact" ? "bg-blue-500 text-white" : ""}
            `}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;