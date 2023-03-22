/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import AOS from 'aos';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeContext } from 'contexts/ThemeContext';
import Content from 'layout/Content';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import MyRoutes from 'Routes';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <div
          className={`flex flex-col ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <Header toggleDarkMode={toggleDarkMode} />
          <Content>
            <MyRoutes />
          </Content>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
