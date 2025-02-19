import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { 
  searchProducts,
  addDailyProduct,
  deleteDailyProduct,
  getDailyInfo 
} from '../controllers/diaryController';

const router = express.Router();

router.get('/products/search', searchProducts);
router.post('/entries', authMiddleware, addDailyProduct);
router.delete('/entries/:id', authMiddleware, deleteDailyProduct);
router.get('/daily/:date', authMiddleware, getDailyInfo);

export default router;