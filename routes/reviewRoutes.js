import express from 'express';


const review = express.Router();

review.get('/', (req, res) => {
    res.send('Rota de review')
});

export default review;