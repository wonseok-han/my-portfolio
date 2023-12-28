import { FaGithub } from 'react-icons/fa';

import { projectData, ProjectItem } from 'data/projectData';

const Projects = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="font-sans text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
          Projects
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div
          className="mx-auto mt-4 grid grid-flow-row gap-4 sm:grid-cols-1 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {projectData.map((item: ProjectItem) => (
            <div
              key={item.key}
              className={`rounded-md bg-gray-800 opacity-70 shadow-2xl transition-all hover:scale-105 hover:opacity-100`}
            >
              <div className="relative">
                <img
                  alt={item.name}
                  className="w-full rounded-t-md object-cover object-top"
                  src={item.image}
                  style={{ height: 300 }}
                />
              </div>
              <div className="p-4">
                <h2 className={`text-xl font-bold text-white`}>{item.name}</h2>
                <p className="mt-2 text-gray-300">{item.intro}</p>
                <p className="mt-2 text-sm text-gray-300">
                  사용기술: {item.skills}
                </p>
                <div className="flex flex-row justify-center gap-5">
                  <a
                    className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800"
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Page
                  </a>
                  <a
                    className="mt-4 inline-block rounded font-bold text-white"
                    href={item.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
