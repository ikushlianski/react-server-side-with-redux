import 'babel-polyfill';
import express from 'express';

import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // check if request URL matches the routes and
  // on those that do match we will execute loadData function
  // returns array of promises, of pending network requests
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(_ => {
    res.send(renderer(req, store));
  })

});

app.listen(3000, () => console.warn(`[${new Date()}] listening to 3000`));