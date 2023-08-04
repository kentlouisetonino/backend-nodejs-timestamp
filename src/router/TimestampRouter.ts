import express from 'express';
import { TimestampController } from '../controller/TimestampController';

const router = express.Router();

router.get('/:timestamp?', TimestampController);

export default router;
