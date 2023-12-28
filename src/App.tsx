import AOS from 'aos';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeContext } from 'contexts/ThemeContext';
import Content from 'layout/Content';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import ErrorPage from 'pages/ErrorPage';
import MyRoutes from 'Routes';

import 'aos/dist/aos.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      enabled: false,
      suspense: true,
      useErrorBoundary: true,
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
              <QueryErrorResetBoundary>
                {({ reset }) => (
                  <ErrorBoundary
                    fallbackRender={({ resetErrorBoundary }) => (
                      <ErrorPage onClick={() => resetErrorBoundary()} />
                    )}
                    onReset={reset}
                  >
                    <MyRoutes />
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </Content>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
