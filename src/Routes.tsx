import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import Career from 'pages/Career';
import Home from 'pages/Home';
import Portfolio from 'pages/Projects';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </GetRoutes>
  );
};

export default Routes;
