
import { find_players } from '../controllers/playersController';

var router = require('express').Router();

// Players routes
router.get('/api/v1/players', find_players);

module.exports = router;
