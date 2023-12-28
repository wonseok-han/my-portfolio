import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import Career from 'pages/Career';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Portfolio from 'pages/Projects';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route element={<Home />} path="/" />
      <Route element={<Career />} path="/career" />
      <Route element={<Portfolio />} path="/portfolio" />
      <Route element={<NotFound />} path="*" />
    </GetRoutes>
  );
};

export default Routes;
