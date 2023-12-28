import AOS from 'aos';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeContext } from 'contexts/ThemeContext';
import Content from 'layout/Content';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import MyRoutes from 'Routes';

import 'aos/dist/aos.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
          <div
            className={`flex min-h-full flex-col ${
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
      </QueryClientProvider>
    </Router>
  );
};

export default App;
