import express from 'express';
import user from './userRoutes.js';
import restaurant from './restaurantRoutes.js';
import review from './reviewRoutes.js';
import login from './loginRoutes.js';

const router = express.Router();

router.use('/user', user);
router.use('/restaurant', restaurant);
router.use('/review', review);
router.use('/login', login);

export default router;