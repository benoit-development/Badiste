
import { find_players, find_players_by_license, save_player } from '../controllers/playersController';

var router = require('express').Router();

// Players routes
router.get('/players', find_players);
router.post('/players', save_player);
router.get('/players?search=:search', find_players);
router.get('/players/:license', find_players_by_license);

module.exports = router;
