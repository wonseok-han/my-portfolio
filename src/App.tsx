import AOS from 'aos';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import FloatingUpButton from 'components/FloatingUpButton';
import ScrollToTop from 'components/ScrollToTop';
import ThemeProvider from 'contexts/ThemeContext';
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div
            className={`flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
          >
            <Header />
            <Content>
              <QueryErrorResetBoundary>
                {({ reset }) => (
                  <ErrorBoundary
                    fallbackRender={({ resetErrorBoundary }) => (
                      <ErrorPage onClick={() => resetErrorBoundary()} />
                    )}
                    onReset={reset}
                  >
                    <ScrollToTop />
                    <MyRoutes />
                    <FloatingUpButton />
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </Content>
            <Footer />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
