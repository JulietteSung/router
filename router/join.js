import express from 'express';
import { inherits } from 'util';
const router = express.Router();

router
  .post('/join', (req, res, next) => {
    const { name, address } = req.body;
    console.log(`name, address --> ${name}, ${address}`);
    res.status(201).send('finish');
  })
  .use((req, res, next) => {
    res.status(404).send('File not found error!!');
  })

export default router;


// npm inint -> json 파일 만들기 -> 

