import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

/*
For SSR to work we have to use react-dom-config,
which requires an array of such objects instead of
<Route>s array as we usually do in React
*/
export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    component: UsersList,
  },
];
