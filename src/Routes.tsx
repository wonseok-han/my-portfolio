import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Career from 'pages/Career';
import Home from 'pages/Home';
import Portfolio from 'pages/Portfolio';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="fade"
        in={true}
        unmountOnExit
      >
        <GetRoutes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </GetRoutes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
