import express from 'express';
const router = express.Router();


router
  .get('/', (req, res, next) => {
    res.send('GET : /');
  })
  .post('/', (req, res, next) => {
    res.send('POST: /');
  })

app
  .put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(`PUT: /:id --->> ${id}`);
  })
  .get('/test/:keyword', (req, res, next) => {
    const { keyword, name } = req.query;
    const keyword = req.query.keyword;
    const name = req.query.name;
    res.send(`GET: /test ---> ${keyword}, ${name}`);
  })
  .post('/join', (req, res, next) => {
    res.send('POST');
  })
  ;

export default router;

