import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // TODO init and load data into store

  res.send(renderer(req, store));
});

app.listen(3000, () => console.warn(`[${new Date()}] listening to 3000`));