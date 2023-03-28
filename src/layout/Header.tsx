import classnames from 'classnames';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useTheme } from 'contexts/ThemeContext';

interface HeaderProps {
  toggleDarkMode: () => void;
}

export default function Header({ toggleDarkMode }: HeaderProps) {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';

  return (
    <header
      className={`fixed inset-x-0 top-0 h-16 shadow-md ${bgColor} ${textColor}`}
    >
      <nav className="flex h-full items-center justify-between px-4">
        <Link to="/" className="text-lg font-semibold hover:text-blue-400">
          <h1 className="text-3xl">wonseok-han&apos;s</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className=" hover:text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/career" className=" hover:text-blue-400 hover:underline">
            Career
          </Link>
          <Link
            to="/portfolio"
            className=" hover:text-blue-400 hover:underline"
          >
            Portfolio
          </Link>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 focus:border-blue-500 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <FiSun className={classnames('h-5 w-5 text-gray-400')} />
            ) : (
              <FiMoon className={classnames('h-5 w-5 text-yellow-500')} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
