import { Player } from "../models/playerModel";

/**
 * Player controller
 */

export function find_players (req, res) {
    console.log(`Request Players`)
    Player.findPlayers(null, function(err, result) {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'error retrieving players',
                error: err
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'players retrieved successfully',
                players: result
            })
        }
    });
}