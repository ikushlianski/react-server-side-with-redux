import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

/*
For SSR to work we have to use react-dom-config,
which requires an array of such objects instead of
<Route>s array as we usually do in React
*/
export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
  },
];
