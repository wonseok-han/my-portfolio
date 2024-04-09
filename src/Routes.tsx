import { Suspense, lazy } from 'react';
import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import Loading from 'components/Loading';

const MainPage = lazy(() => import('pages/index'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <GetRoutes location={location}>
        <Route element={<MainPage />} path="/" />
        <Route element={<NotFound />} path="*" />
      </GetRoutes>
    </Suspense>
  );
};

export default Routes;
