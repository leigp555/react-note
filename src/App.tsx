import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
// import RequireAuth from './components/RequireAuth';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Test = lazy(() => import('./pages/Test'));

const App: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test name="lgp" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Suspense>
);

export default App;
