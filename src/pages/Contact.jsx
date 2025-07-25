import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    < >
      <div className="flex flex-col min-h-screen">
      <Nav/>
    <section id="contact" className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8 flex-grow">
      
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-400">christianaomonola99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-400">+2348164905260, +2348154044538</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <Link to='https://github.com/Tiaanaa' className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" target='_blank'><FiGithub className="w-6 h-6" /></Link>
                <Link to='https://www.linkedin.com/in/omonolachristiana' className="text-gray-400 hover:text-purple-400" target='_blank'><FiLinkedin className="w-6 h-6" /></Link>
                <Link to='https://x.com/Tiana_yemi' className="text-gray-400 hover:text-purple-400" target='_blank'><FiTwitter className="w-6 h-6" /></Link>
                <Link to='https://www.instagram.com/christy_adeyemi' className="text-gray-400 hover:text-purple-400" target='_blank'><FiInstagram className="w-6 h-6" /></Link>

                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md shadow-sm border-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-50text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md shadow-sm focus:border-purple-500 focus:bg-gray-800 border-gray-700 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
       
      </section>
        <Footer />
        </div>
    </>
    
  );
};

export default Contact;
