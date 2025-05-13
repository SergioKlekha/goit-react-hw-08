import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout.jsx';
import { PrivateRoute } from '../../Routes/PrivateRote.jsx';
import { PublicRoute } from '../../Routes/PublicRote.jsx';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm.jsx'));
const RegistrationForm = lazy(() =>
  import('../RegistrationForm/RegistrationForm.jsx')
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactPage/ContactPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

import { refreshUserThunk } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationForm />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;