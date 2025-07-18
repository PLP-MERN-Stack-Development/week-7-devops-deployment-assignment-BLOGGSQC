import express from 'express';
import {
  getAllBugs,
  createBug,
  updateBug,
  deleteBug
} from '../controllers/bugController.js';

const router = express.Router();

router.get('/', getAllBugs);
router.post('/', createBug);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;
