import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-[#F3F4FE] flex items-center justify-center px-4 md:px-8 lg:px-16"
    >
      <div className="flex-1 bg-white shadow-lg px-8 py-10 md:px-12 md:py-12 lg:px-20 lg:py-16 max-w-lg md:max-w-4xl lg:max-w-6xl">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 bg-[#3B82F6] w-32 md:w-40 lg:w-40 flex justify-center py-2 text-white">
          About Us
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Transforming the Way People Learn
        </h1>
        <div className="text-base md:text-lg lg:text-xl">
          <p className="mb-4">
            Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades, a professional seeking to upskill, or an organization looking to enhance employee training, we have the tools and resources you need to succeed.
          </p>
          <p>
            If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and create a better future for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;