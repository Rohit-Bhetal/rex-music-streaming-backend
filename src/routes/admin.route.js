import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from './../controller/admin.controller.js';

const router = Router();

router.use(protectRoute,requireAdmin)

//Admin or Not finder Route
router.get("/check",checkAdmin)

//Create and Delete in Song
router.post("/songs",createSong)
router.delete("/songs/:id",deleteSong)

//Create and Delete in ALbum

router.post('/albums',createAlbum);
router.post('/albums/:id',deleteAlbum)
export default router;