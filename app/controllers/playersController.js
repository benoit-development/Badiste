/**
 * Player controller
 */
import db from '../models/db';

export function get_all_players (req, res) {
    console.log(`Request Todos`)
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
}