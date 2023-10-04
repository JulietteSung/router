import express from 'express';

const router = express.Router();

// GET - http://localhost.8080/posts
// POST - http://localhost.8080/posts
// PUT - http://localhost.8080/posts/test
// DELETE - http://localhost.8080/posts/test

router.get('/', (req, res, next) => {
  res.send('GET: /users');
});
// 전체 다 보여주기 get 으로 받음

router.post('/', (req, res, next) => {
  res.send('POST :/users');
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT:/users/:id ==> ${req.params.id}`);
});
// 업데이트는 put으로 받음

router.delete('/:id', (req, res, next) => {
  res.send(`DELETE:/users/:id ==> ${req.params.id}`);
});

export default router;
