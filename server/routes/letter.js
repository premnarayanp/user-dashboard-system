import express from 'express';
import passport from 'passport';
import { getAllLetters, filterLetter, downloadLetter } from '../controllers/letters_controller.js'

const router = express.Router();

router.get('/posts', passport.authenticate('jwt', { session: false }), getAllLetters);
router.get('/filter/:letterType', passport.authenticate('jwt', { session: false }), filterLetter);
router.get('/downloads/:letter_id', passport.authenticate('jwt', { session: false }), downloadLetter);

export default router;