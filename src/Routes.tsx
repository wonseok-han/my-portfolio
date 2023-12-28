import { Suspense, lazy } from 'react';
import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import Loading from 'components/Loading';

const Career = lazy(() => import('pages/Career'));
const Project = lazy(() => import('pages/Project'));
const NotFound = lazy(() => import('pages/NotFound'));
const Home = lazy(() => import('pages/Home'));

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <GetRoutes location={location}>
        <Route element={<Home />} path="/" />
        <Route element={<Career />} path="/career" />
        <Route element={<Project />} path="/portfolio" />
        <Route element={<NotFound />} path="*" />
      </GetRoutes>
    </Suspense>
  );
};

export default Routes;
