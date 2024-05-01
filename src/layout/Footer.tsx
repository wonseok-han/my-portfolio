import { FaGithub } from 'react-icons/fa';

import { useTheme } from 'contexts/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';

  return (
    <footer
      className={`flex h-20 items-center justify-center gap-5 shadow-inner ${bgColor} ${textColor}`}
    >
      <p>&copy; {new Date().getFullYear()} wonseok-han&apos;s Page</p>
      <a
        href={`https://github.com/wonseok-han`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub size={25} />
      </a>
    </footer>
  );
}
