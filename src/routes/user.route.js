import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';
import { getAlluser } from './../controller/user.controller.js';

const router = Router();

router.get('/',protectRoute,getAlluser)

export default router;