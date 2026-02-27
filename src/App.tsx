import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { MainLayout } from '@/components/MainLayout';

import routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <IntersectObserver />
      <MainLayout>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
