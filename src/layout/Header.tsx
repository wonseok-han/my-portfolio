import classnames from 'classnames';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-white shadow-md">
      <nav className="flex h-full items-center justify-between px-4">
        <Link to="/" className="text-lg font-semibold text-gray-800">
          wonseok-han&apos;s Site
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-500 hover:text-black hover:underline"
          >
            Home
          </Link>
          <Link
            to="/career"
            className="text-gray-500 hover:text-black hover:underline"
          >
            Career
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-500 hover:text-black hover:underline"
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
