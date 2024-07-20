import express, { Express } from 'express';
import path from 'path';
import { layout } from './layout';
import { Homepage } from './pages';
import { ArcjetChallenge } from './pages/arcjet-challenge-accepted';

const app: Express = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send(layout(Homepage()));
});

app.get('/arcjet-challenge-accepted', (req, res) => {
  res.send(layout(ArcjetChallenge()));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});