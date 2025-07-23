import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const Port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/artists', async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get('/songs', async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(Port, () => {
  console.log('Server is running on http://localhost:' + Port);
});