import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';
import { getAllSong, getFeaturedSong, getMadeForYouSongs } from '../controller/song.controller.js';
import {youtubeFetch} from '../controller/youtubeFetch.controller.js'
import { streamYoutube } from '../controller/streamYoutube.controller.js';
import {youtubeSearch} from '../controller/youtubeSearch.controller.js'
import {getTrendingSongs} from '../controller/trendingFetchYT.controller.js'
const router = Router();

router.get('/',protectRoute,requireAdmin,getAllSong);
router.get('/getFeaturedSong',getFeaturedSong);
router.get('/getMadeForYouSongs',getMadeForYouSongs);
router.get('/getTrendingSongs',getTrendingSongs);
router.get('/fetchYoutubeSongs',youtubeFetch)
router.get('/streamYT',streamYoutube)
router.get('/searchYT',youtubeSearch)

export default router;