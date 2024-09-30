import { useState } from 'react';
import { FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import { Link } from 'react-scroll';

import './Header.css';
import { useTheme } from 'contexts/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 bg-white text-gray-800 shadow-md dark:bg-gray-800 dark:text-white`}
    >
      <nav className="flex h-full items-center justify-between px-4">
        <Link className="text-lg font-black hover:text-blue-400" to="/">
          <p className="cursor-pointer text-2xl sm:text-3xl lg:text-4xl">
            wonseok-han 확인333
          </p>
        </Link>
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            className="cursor-pointer text-lg font-extrabold hover:text-blue-400 hover:underline"
            duration={500}
            smooth={true}
            to="aboutme"
          >
            <p>AboutMe</p>
          </Link>
          <Link
            className="cursor-pointer text-lg font-extrabold hover:text-blue-400 hover:underline"
            duration={500}
            smooth={true}
            to="skills"
          >
            <p>Skills</p>
          </Link>
          <Link
            className="cursor-pointer text-lg font-extrabold hover:text-blue-400 hover:underline"
            duration={500}
            smooth={true}
            to="career"
          >
            <p>Career</p>
          </Link>
          <Link
            className="cursor-pointer text-lg font-extrabold hover:text-blue-400 hover:underline"
            duration={500}
            smooth={true}
            to="projects"
          >
            <p>Projects</p>
          </Link>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 focus:border-blue-500 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <FiSun className={'h-5 w-5 text-gray-400'} />
            ) : (
              <FiMoon className={'h-5 w-5 text-yellow-500'} />
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="flex h-8 w-8 items-center justify-center focus:outline-none"
            onClick={handleMenuButtonClick}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            ) : (
              <FiMenu className={`h-7 w-7 transition duration-200`} />
            )}
          </button>
        </div>
        <div
          className={`absolute inset-x-0 top-16 rounded-t-lg shadow-lg md:hidden ${
            !isOpen ? 'hidden' : ''
          } ${isOpen ? 'slide-down' : 'slide-up'}`}
        >
          <div className="flex flex-col items-center">
            <Link
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
              duration={500}
              smooth={true}
              to="aboutme"
              onClick={handleMenuButtonClick}
            >
              <p>AboutMe</p>
            </Link>
            <Link
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
              duration={500}
              smooth={true}
              to="skills"
              onClick={handleMenuButtonClick}
            >
              <p>Skills</p>
            </Link>
            <Link
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
              duration={500}
              smooth={true}
              to="career"
              onClick={handleMenuButtonClick}
            >
              <p>Career</p>
            </Link>
            <Link
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
              duration={500}
              smooth={true}
              to="projects"
              onClick={handleMenuButtonClick}
            >
              <p>Projects</p>
            </Link>
            <button
              className="my-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 focus:border-blue-500 focus:outline-none"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <FiSun className={'h-5 w-5 text-gray-400'} />
              ) : (
                <FiMoon className={'h-5 w-5 text-yellow-500'} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
