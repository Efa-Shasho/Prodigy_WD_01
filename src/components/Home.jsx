import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-blue-500 flex justify-center items-center px-4 md:px-8 lg:px-16"
    >
      <div className="text-center w-full max-w-screen-md">
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 lg:mb-10 overflow-hidden whitespace-nowrap text-ellipsis">
          Prodigy InfoTech
        </h1>
        <h3 className="text-slate-200 text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4 lg:mb-6 overflow-hidden whitespace-nowrap text-ellipsis">
          Providing World Class E-Learning Experience with Real-world
        </h3>
        <h3 className="text-slate-200 text-xl md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap text-ellipsis">
        Internships
        </h3>
      </div>
    </section>
  );
};

export default Home;