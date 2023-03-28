import { FaGithub } from 'react-icons/fa';

import { portfolioData, PortfolioItem } from 'data/portfolioData';

const Portfolio = () => {
  const portfolioItems = portfolioData.map((item, index) => ({
    ...item,
    active: index === 0,
  }));

  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-900">Portfolio</h1>
        <hr className="h-1 bg-gray-700" />
        <div
          className="mx-auto mt-4 grid grid-flow-row gap-2 sm:grid-cols-1 lg:grid-cols-2"
          data-aos="fade-up"
        >
          {portfolioItems.map((item: PortfolioItem) => (
            <div
              key={item.key}
              className={`grid grid-flow-col grid-rows-2 bg-gray-800 opacity-80 shadow-md hover:opacity-100`}
              style={{ gridTemplateRows: '1.5fr 0.5fr' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain"
              />
              <div className="m-3 inline-block">
                <h2 className={`text-center text-2xl font-bold text-white`}>
                  {item.name}
                </h2>
                <p className="mt-2 text-gray-300">{item.skills}</p>
                <div className="flex flex-row justify-center gap-5">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800"
                  >
                    View Page
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded font-bold text-white"
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

export default Portfolio;
