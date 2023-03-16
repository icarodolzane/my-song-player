import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import Album from './pages/Album';
import LoginProvider from './context/LoginProvider';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: '/search',
    element: <Search />,
    errorElement: <NotFound />,
  },
  {
    path: '/album/:id',
    element: <Album />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/edit',
    element: <ProfileEdit />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
    <RouterProvider router={router} />
  </LoginProvider>,
);
