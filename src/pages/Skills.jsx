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
      <Nav />
      <section id="skills" className=" flex flex-col items-center py-20 bg-purple-300 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 h-screen">
      
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        
          <div className='w-100 '>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="md:w-full sm:w-5 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="bg-purple-600 dark:bg-purple-400 h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

     
    </section>
    <Footer/></>
  );
};

export default Skills;
