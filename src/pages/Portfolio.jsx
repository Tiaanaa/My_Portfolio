import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const Portfolio = () => {
  const frontendProjects = [
    {
      title: 'Calculator App',
      description: 'A simple calculator app built with React and JavaScript',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://calculator-ochre-alpha-40.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website using modern web technologies',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/'
    },
    {
      title: 'Grade Calculator App',
      description: 'A grade calculator app built with React and JavaScript',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://grade-calculator-navy.vercel.app/'
    },
    {
      title: 'Social Links Profile',
      description: 'A social links profile page built with HTML and CSS',
      image: 'https://res.cloudinary.com/dqyda9hcz/image/upload/v1747832111/socialLinkImage_m8ko09.png',
      link: 'https://social-link-profiles-plum.vercel.app/#'
    },
    {
      title: 'Weather App',
      description: 'A weather app that fetches real-time weather data',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://weather-app-alpha-seven-62.vercel.app/'
    }, 
    {
      title: 'Fin services',
      description: 'A financial services platform offering various solutions',
      image: 'https://res.cloudinary.com/dqyda9hcz/image/upload/v1747831985/samples/man-on-a-street.jpg',
      link: 'https://fin-services.vercel.app/'
    },
    {
      title: 'Styles Conference',
      description: 'A conference website showcasing speakers and sessions',
      image: 'https://res.cloudinary.com/dqyda9hcz/image/upload/v1747831978/samples/imagecon-group.jpg',
      link: 'https://styles-conference-ddsn.vercel.app/'
    }
    
    
    
  ];
      
   

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Nav/>
    <section id="portfolio" className=" flex-growpy-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          My Portfolio
        </h2>

        {/* Frontend Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-400 mb-8">
           Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={`${project.title} frontend project`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300" >View Project →</Link>
                  
                    
                 
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <Footer/>
      </div>
    </>
  );
};

export default Portfolio;
