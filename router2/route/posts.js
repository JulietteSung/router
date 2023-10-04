import express from 'express';


const router = express.Router();

// GET - http://localhost.8080/posts
// POST - http://localhost.8080/posts
// PUT - http://localhost.8080/posts/test
// DELETE - http://localhost.8080/posts/test

router.get('/', (req, res, next) => {
  res.send('GET: /posts');
});


router.post('/', (req, res, next) => {
  res.send('POST :/posts');
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT:/posts/:id ==> ${req.params.id}`);
});

router.delete('/:id', (req, res, next) => {
  res.send(`DELETE:/posts/:id ==> ${req.params.id}`);
});

export default router;
