
import { get_all_players } from '../controllers/playersController';

var router = require('express').Router();

// Players routes
router.get('/api/v1/todos', get_all_players);

module.exports = router;
