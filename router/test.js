import express from 'express';
const router = express.Router;

router.get('/test', (req, res, next) => {
  const { keyword, name } = req.query;
  res.send(`GET : /test ---> ${keyword}, ${name}`);
});

export default router;