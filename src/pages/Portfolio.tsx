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
          className="mx-auto mt-4 grid grid-flow-row gap-4 sm:grid-cols-1 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {portfolioItems.map((item: PortfolioItem) => (
            <div
              key={item.key}
              className={`rounded-md bg-gray-800 opacity-70 shadow-2xl transition-all hover:scale-105 hover:opacity-100`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-t-md object-cover"
                  style={{ height: 300 }}
                />
              </div>
              <div className="p-4">
                <h2 className={`text-lg font-bold text-white`}>{item.name}</h2>
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
