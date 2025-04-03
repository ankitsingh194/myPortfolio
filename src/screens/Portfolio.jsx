import React from 'react';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';


const projects = [
  {
    id: 1,
    title: 'RealState Website',
    description: 'A complete  website to show your realstate propertys.',
    image: project2
  },
  {
    id: 2,
    title: 'Doctor Task Management WebApp',
    description: 'A productivity Webapp to manage your tasks effectively.',
    image: project1
  },
  
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100">
            <img src={project.image} alt={project.title} className="w-full h-[30rem] object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
