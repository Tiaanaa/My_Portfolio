import React from 'react';
import { Link } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Nav/>
      <section id="home" className="py-24 px-4 flex flex-col flex-grow md:flex-row items-center justify-between sm:px-6 lg:px-8 bg-gray-800 ">
      
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm Omonola Christiana
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-400 mb-6">
              Frontend Developer 
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Crafting beautiful web experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              <Link to="/portfolio" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">View My Work</Link>
              <Link to="/contact" className="border-2 border-purple-600 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200">Contact Me</Link>
             
            </div>
          </div>

          {/* Image Section */}
          
            <img
              src="https://res.cloudinary.com/dqyda9hcz/image/upload/v1747832124/IMG_9083vista_1_diy9ym.jpg"
              alt="Omonola Christiana - Frontend Developer and Fashion Designer"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl "
            />
     
      </section>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
