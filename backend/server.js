import express from 'express';
import data from './data.js';

const app = express();
const port = 3333;

app.get('/api/posts', (req, res) => {
  res.send(data);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
