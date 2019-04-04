import { Player } from "../models/playerModel";

/**
 * Player controller
 */

export function find_players (req, res) {
    var filter = req.query.search;
    console.log(`Request Players : ${filter}`);
    Player.findPlayers(filter, function(err, result) {
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
    Player.findPlayerByLicense(license, function(err, result) {
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
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    var player = new Player(
        req.body.license,
        req.body.name,
        req.body.gender,
        req.body.active
    );
    console.log(`Request Saving Player : ${player}`);
    Player.savePlayer(player, function(err, result) {
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