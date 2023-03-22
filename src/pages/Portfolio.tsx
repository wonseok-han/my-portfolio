/* eslint-disable @typescript-eslint/naming-convention */
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Project 1',
    image: 'https://dummyimage.com/300x300/000/fff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://www.example.com',
  },
  {
    id: 2,
    name: 'Project 2',
    image: 'https://dummyimage.com/300x300/ddd/000',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://www.example.com',
  },
  {
    id: 3,
    name: 'Project 3',
    image: 'https://dummyimage.com/300x300/666/fff',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://www.example.com',
  },
  {
    id: 4,
    name: 'Project 4',
    image: 'https://dummyimage.com/300x300/999/fff',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: 'https://www.example.com',
  },
];

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  active: boolean;
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects: Array<Project> = PROJECTS_DATA.map((data) => ({
    ...data,
    active: false,
  }));

  useEffect(() => {
    projects[activeIndex].active = true;
  }, [activeIndex, projects]);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-900">Portfolio</h1>
        <div className="relative h-80">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                project.active ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-700"
                >
                  View project
                </a>
              </div>
            </div>
          ))}
          <button
            className="absolute top-1/2 left-0 ml-4 -translate-y-1/2 focus:outline-none"
            onClick={handlePrev}
          >
            <FiChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="absolute top-1/2 right-0 mr-4 -translate-y-1/2 focus:outline-none"
            onClick={handleNext}
          >
            <FiChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
