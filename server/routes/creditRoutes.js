import express from 'express';
import { getPlans, purchasePlans } from '../controllers/creditContoller.js';
import { protect } from '../middelwares/auth.js';

const creditRouter = express.Router();

creditRouter.get('/plan', getPlans);
creditRouter.post('/purchase', protect, purchasePlans)

export default creditRouter