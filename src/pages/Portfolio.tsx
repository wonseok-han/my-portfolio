/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';

import { portfolioData } from 'data/portfolioData';

const Portfolio = () => {
  const [, setActiveIndex] = useState(0);
  const portfolioItems = portfolioData.map((item, index) => ({
    ...item,
    active: index === 0,
  }));

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-900">Portfolio</h1>
        <hr className="h-1 bg-gray-700" />
        <div className="relative mt-4 flex h-80 flex-col flex-wrap space-y-4">
          {portfolioItems.map((item) => (
            // <CSSTransition
            //   key={item.key}
            //   classNames="fade"
            //   timeout={{ enter: 500, exit: 300 }}
            // >
            <div
              key={item.key}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                item.active ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 ">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-gray-300">{item.skills}</p>
                <div className="text-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-700"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>
            // </CSSTransition>
          ))}
          <button
            className="absolute top-1/2 left-0 ml-4 -translate-y-1/2 focus:outline-none"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 mr-4 -translate-y-1/2 focus:outline-none"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
