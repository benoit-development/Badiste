import { Player } from "../models/playerModel";

/**
 * Player controller
 */

export function find_players (req, res) {
    var filter = req.query.search;
    console.log(`Request Players : ${filter}`);
    Player.find(filter, function(err, result) {
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

export function find_players_by_license (req, res) {
    var license = req.params.license;
    console.log(`Request Player by license : ${license}`);
    Player.findByLicense(license, function(err, result) {
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
                player: result
            })
        }
    });
}

export function save_player (req, res) {
    var player = new Player(
        req.body.license,
        req.body.name,
        req.body.gender,
        req.body.active
    );
    console.log(`Request Saving Player : ${player}`);
    Player.save(player, function(err, result) {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'error saving player',
                error: err
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'players saved successfully',
                player: result
            })
        }
    });
}