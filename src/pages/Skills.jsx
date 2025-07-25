import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Responsive Design', level: 90 }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Nav />
      <section
        id="skills"
        className="flex flex-col flex-grow items-center py-20 bg-gray-800 px-4 sm:px-6 lg:px-8 "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My Skills
        </h2>

        <div className="w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">
            Technical Skills
          </h3>

          <div className="flex flex-col gap-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="bg-purple-400 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
