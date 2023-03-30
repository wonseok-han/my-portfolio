/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useTheme } from 'contexts/ThemeContext';

import './Header.css';

interface HeaderProps {
  toggleDarkMode: () => void;
}

export default function Header({ toggleDarkMode }: HeaderProps) {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 h-16 shadow-md ${bgColor} ${textColor} z-50`}
    >
      <nav className="flex h-full items-center justify-between px-4">
        <Link to="/" className="text-lg font-extrabold hover:text-blue-400">
          <h1 className="text-4xl">wonseok-han</h1>
        </Link>
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            to="/"
            className="text-lg font-extrabold hover:text-blue-400 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/career"
            className="text-lg font-extrabold hover:text-blue-400 hover:underline"
          >
            Career
          </Link>
          <Link
            to="/portfolio"
            className="text-lg font-extrabold hover:text-blue-400 hover:underline"
          >
            Projects
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
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <FiMenu
                className={`h-7 w-7 transition duration-200 ${textColor}`}
              />
            )}
          </button>
        </div>
        <div
          className={`absolute inset-x-0 top-16 rounded-t-lg shadow-lg md:hidden ${bgColor} ${
            !isOpen ? 'hidden' : ''
          } ${isOpen ? 'slide-down' : 'slide-up'}`}
        >
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/career"
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
            >
              Career
            </Link>
            <Link
              to="/portfolio"
              className="my-4 text-lg font-extrabold hover:text-blue-400 hover:underline"
            >
              Projects
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
