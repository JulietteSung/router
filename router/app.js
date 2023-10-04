import express from 'express';
import route from './route.js';
import testRouter from './test.js';
import joinRouter from './join.js';

const app = express();
app.use(express.json());

app.use('/', route); // use는 하위 디렉토리까지 한꺼번에 관리 가능
app.use('/test', testRouter);
app.use('/join', joinRouter);

app
  .get('/test', (req, res, next) => {
    res.send('GET : /');
  });
.post('/join', (req, res, next) => {
    const { name, address } = req.body;
    console.log(`name, address --> ${name}, ${address}`);
    res.status(201).send('finish');
  })
  