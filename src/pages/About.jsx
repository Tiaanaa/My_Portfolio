import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
const About = () => {

  return (
    <div className= 'h-screen'>
      <Nav />
    <section id="about" className="py-20 bg-purple-300 dark:bg-gray-800  px-4 sm:px-6 lg:px-8 h-full"  >
      
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Journey Section */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Frontend Developer and with a unique blend of technical expertise and creative flair. My journey began in web development, where I discovered my love for creating intuitive and visually appealing digital experiences.
            </p>
          </div>

          {/* What I Do Section */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              What I Do
            </h3>
            
                <div className="flex items-start">
<div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mr-4">
                  <code className="text-purple-600 dark:text-purple-400 text-xl">&lt;/&gt;</code>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building responsive and interactive web applications
                  </p>
                </div>
                </div>
             
          </div>
        </div>
     
      </section>
      <Footer/>
    </div>
  );
};

export default About;
