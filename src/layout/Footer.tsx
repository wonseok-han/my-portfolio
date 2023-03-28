import { useTheme } from 'contexts/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 h-14 ${bgColor} ${textColor} flex items-center justify-center`}
    >
      <p>© 2023 wonseok-han&apos;s Page</p>
    </footer>
  );
}
