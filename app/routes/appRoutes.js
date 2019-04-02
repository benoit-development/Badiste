
import { find_players, find_players_by_license } from '../controllers/playersController';

var router = require('express').Router();

// Players routes
router.get('/api/v1/players', find_players);
router.get('/api/v1/players?search=:search', find_players);
router.get('/api/v1/players/:license', find_players_by_license);

module.exports = router;
